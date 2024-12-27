"use client";

import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import Container from "./components/Container";
import { Item } from "./components/SortableItm";

type Items = Record<string, string[]>;

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

export default function Dnd() {
  const [items, setItems] = useState<Items>({
    root: ["1", "2", "3"],
    container1: ["4", "5", "6"],
    container2: ["7", "8", "9"],
  });
  // 컨테이너가 포함하고 있는 값 -> 로컬스토리지로 받아와야 됨
  const [activeId, setActiveId] = useState<string | null>(null);
  // 드래그 중인 아이템의 아이디

  const sensors = useSensors(useSensor(PointerSensor));
  // 마우스의 작동 감지

  return (
    <div style={wrapperStyle}>
      <DndContext
        // DndContext - drag-and-drop state 와 event 관리
        // 디버깅용
        // accessibility={{
        //   announcements: {
        //     onDragStart({ active }) {
        //       const message = `Picked up draggable item ${active.id}.`;
        //       console.log(message);
        //       return message;
        //     },
        //     onDragOver({ active, over }) {
        //       if (over) {
        //         const message = `Draggable item ${active.id} was moved over droppable area ${over.id}.`;
        //         console.log(message);
        //         return message;
        //       } else {
        //         const message = `Draggable item ${active.id} is no longer over a droppable area.`;
        //         console.log(message);
        //         return message;
        //       }
        //     },
        //     onDragEnd({ active, over }) {
        //       if (over) {
        //         const message = `Draggable item ${active.id} was dropped over droppable area ${over.id}.`;
        //         console.log(message);
        //         return message;
        //       } else {
        //         const message = `Draggable item ${active.id} was dropped.`;
        //         console.log(message);
        //         return message;
        //       }
        //     },
        //     onDragCancel({ active }) {
        //       const message = `Dragging was cancelled. Draggable item ${active.id} was dropped.`;
        //       console.log(message);
        //       return message;
        //     },
        //   },
        // }}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Container id="root" items={items.root} />
        <Container id="container1" items={items.container1} />
        <Container id="container2" items={items.container2} />
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );

  function findContainer(id: UniqueIdentifier): string | undefined {
    const idStr = id.toString();
    if (idStr in items) {
      return idStr;
    }

    return Object.keys(items).find((key) => items[key].includes(idStr));
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const id = active.id.toString();

    setActiveId(id);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const id = active.id.toString();
    const overId = over?.id.toString();
    const activeContainer = findContainer(id);
    const overContainer = overId ? findContainer(overId) : undefined;

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId as string);

      let newIndex;
      if (overId && overId in prev) {
        newIndex = overItems.length;
      } else {
        const isBelowLastItem =
          over && overIndex === overItems.length - 1 && event.delta.y > 0;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
      }

      return {
        ...prev,
        [activeContainer]: activeItems.filter((item) => item !== id),
        [overContainer]: [
          ...overItems.slice(0, newIndex),
          activeItems[activeIndex],
          ...overItems.slice(newIndex),
        ],
      };
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const id = active.id.toString(); // Convert to string
    const overId = over?.id.toString(); // Convert to string if exists

    const activeContainer = findContainer(id);
    const overContainer = overId ? findContainer(overId) : undefined;

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(id);
    const overIndex = items[overContainer].indexOf(overId as string);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex,
        ),
      }));
    }

    setActiveId(null);
  }
}
