import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ItemProps {
  id: string;
}

export function Item({ id }: ItemProps) {
  return (
    <div className="my-2 flex h-12 w-full items-center justify-center border border-black bg-white">
      {id}
    </div>
  );
}

interface SortableItemProps {
  id: string;
}

export default function SortableItem({ id }: SortableItemProps) {
  const { listeners, setNodeRef, transform, transition } =
    //setNodeRef - 이벤트 적용 노드 참조
    useSortable({ id });
  // useSortable - 분류 가능한 아이템 목록
  // attributes - 접근성 관련 속성 aria (제거함)
  // listener - event listenr

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners}>
      <Item id={id} />
    </div>
  );
}
