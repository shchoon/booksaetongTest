import { DragStartEvent, DragOverEvent, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

/**
 * 아이템이 속해있는 컨테이너를 찾는 함수
 */
export function findContainer(
  id: string,
  items: Record<string, string[]>,
): string | undefined {
  if (id in items) {
    // 아이템이 다른 컨테이너로 이동하는 경우
    return id;
  }

  return Object.keys(items).find((key) => items[key].includes(id)); // 아이템이 컨테이너 내에서 이동하는 경우
}

/**
 * 드래그 시작 : active 상태 추적
 */
export function handleDragStart(
  event: DragStartEvent,
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>,
) {
  const { active } = event;
  const id = active.id.toString();
  setActiveId(id);
}

/**
 * 드래그 중: 마우스가 다른 컨테이너 위로 이동할 때
 */
export function handleDragOver(
  event: DragOverEvent,
  items: Record<string, string[]>,
  updateContainers: (updated: Partial<Record<string, string[]>>) => void,
) {
  const { active, over } = event;
  const id = active.id.toString();
  const overId = over?.id.toString();
  const activeContainer = findContainer(id, items);
  const overContainer = overId ? findContainer(overId, items) : undefined;

  if (!activeContainer || !overContainer || activeContainer === overContainer) {
    return;
  }

  const activeItems = [...items[activeContainer]];
  const overItems = [...items[overContainer]];

  // 이전 컨테이너에서 아이템 제거
  const activeIndex = activeItems.indexOf(id);
  activeItems.splice(activeIndex, 1);

  // 드래그 중인 아이템의 새 인덱스
  let newIndex = 0;

  const overIndex = overItems.indexOf(overId as string);

  if (overId && overId in items) {
    // 컨테이너 영역에 있을 시 인덱스 -> 배열의 제일 끝
    newIndex = overItems.length;
  } else {
    const isBelowLastItem =
      over && overIndex === overItems.length - 1 && event.delta.y > 0;
    const modifier = isBelowLastItem ? 1 : 0;
    newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
  }
  // Insert in the new container
  overItems.splice(newIndex, 0, id);

  updateContainers({
    [activeContainer]: activeItems,
    [overContainer]: overItems,
  });
}

/**
 * 드랍 + 컨테이너 내에서 이동될 때
 */
export function handleDragEnd(
  event: DragEndEvent,
  items: Record<string, string[]>,
  updateContainers: (updated: Partial<Record<string, string[]>>) => void,
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>,
) {
  const { active, over } = event;

  //컨테이너 밖에 드랍된 경우
  if (!over) {
    setActiveId(null);
    return;
  }

  const id = active.id.toString();
  const overId = over.id.toString();

  const activeContainer = findContainer(id, items);

  // 활성화 된 컨테이너가 없는 경우
  if (!activeContainer) {
    setActiveId(null);
    return;
  }

  // 같은 컨테이네에서 아이템이 움직일 때
  const containerItems = items[activeContainer];
  const activeIndex = containerItems.indexOf(id);
  const overIndex = containerItems.indexOf(overId);

  if (activeIndex !== overIndex) {
    const newItems = arrayMove(containerItems, activeIndex, overIndex);
    updateContainers({
      [activeContainer]: newItems,
    });
  }
  setActiveId(null);
}
