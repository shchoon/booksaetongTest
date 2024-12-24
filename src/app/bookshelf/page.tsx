"use client";

import React from "react";
import BooksRow from "./components/BooksRow";
import { storedBook } from "@/mock/bookshelf";

export default function BookShelf() {
  return (
    <div className="h-minu-nav flex w-full items-center justify-center">
      <BooksRow data={storedBook} />
    </div>
  );
}
