import Image from "next/image";
import { Book } from "@/types/common";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { CiCirclePlus } from "react-icons/ci";

export default function BooksRow({ data }: { data: Book[] }) {
  const { containerRef, handleWheel } = useHorizontalScroll();
  return (
    <div
      className="scrollbar-hidden w-full overflow-x-auto scroll-smooth"
      onWheel={handleWheel}
      ref={containerRef}
    >
      <div className="h-100 mx-10 flex w-max border-2">
        {data?.map((item: Book) => (
          <div key={item.isbn} className="relative m-2 h-40 w-28">
            <Image
              src={item.thumbnail}
              alt={item.title || "Thumbnail"}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {data?.map((item: Book) => (
          <div key={item.isbn} className="relative m-2 h-40 w-28">
            <Image
              src={item.thumbnail}
              alt={item.title || "Thumbnail"}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="m-2 flex h-40 w-28 items-center justify-center rounded-2xl border-2 border-dashed border-[#d4d4d4]">
          <CiCirclePlus size={50} color="#A3A3A3" />
        </div>
      </div>
    </div>
  );
}
