"use client";

import Image from "next/image";
import { useState } from "react";
import bookmarkEmpty from "/public/icons/BookmarkEmpty.svg";
import bookmarkFilled from "/public/icons/BookmarkFilled.svg";

export default function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState<boolean>();

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div
      className="absolute right-5 top-4 cursor-pointer"
      onClick={toggleBookmark}
    >
      <Image
        src={isBookmarked ? bookmarkFilled : bookmarkEmpty}
        width={24}
        height={24}
        alt={isBookmarked ? "북마크 삭제" : "북마크 추가"}
      />
    </div>
  );
}
