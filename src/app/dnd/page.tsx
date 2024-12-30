"use client";

import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  rectIntersection,
} from "@dnd-kit/core";

import Container from "./components/Container";
import SortableItem from "./components/SortableItm";
import { useLikedBookStore } from "@/stores/likedBooks";
import {
  handleDragStart,
  handleDragOver,
  handleDragEnd,
} from "@/libs/dnd/dragHelper";

export default function Dnd() {
  //zustand localStorage persist
  const { root, container1, container2, setItems } = useLikedBookStore();
  // 드래그 중인 items의 id
  const [activeId, setActiveId] = useState<string | null>(null);

  // items 객체로 묶어서 가져오기
  const items = { root, container1, container2 };

  const sensors = useSensors(useSensor(PointerSensor));

  // 컨테이너 요소 변경
  const updateContainers = (updated: Partial<typeof items>) => {
    Object.entries(updated).forEach(([container, arr]) => {
      setItems(container as keyof typeof items, arr as string[]);
    });
  };

  return (
    <div className="h-minu-nav flex flex-row">
      <DndContext
        sensors={sensors} // 이벤트 감지 센서 -> PointerSensor 마우스 포인터
        collisionDetection={rectIntersection} // 이벤트의 영역 감지 rectIntersection -> setNodeRef 지정된 내부 영역
        onDragStart={(event) => handleDragStart(event, setActiveId)}
        onDragOver={(event) => handleDragOver(event, items, updateContainers)}
        onDragEnd={(event) =>
          handleDragEnd(event, items, updateContainers, setActiveId)
        }
      >
        {/* To Do 컨테이너 이름 업데이트 */}
        <Container id="root" items={items.root} />
        <Container id="container1" items={items.container1} />
        <Container id="container2" items={items.container2} />

        {/* 드래그 되고 있는 아이템 overlay*/}
        <DragOverlay>
          {activeId ? <SortableItem id={activeId} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
