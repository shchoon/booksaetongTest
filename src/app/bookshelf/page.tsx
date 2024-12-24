"use client";

import React from "react";
import { useTextApi } from "@/hooks/useTextApi";
import BooksRow from "./components/BooksRow";

export default function BookShelf() {
  const { data } = useTextApi();

  return (
    <div className="h-minu-nav flex w-full items-center justify-center">
      <BooksRow data={data} />
    </div>
  );
}
