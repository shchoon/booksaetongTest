"use client";

import { useCountStore } from "@/src/stores/counter";

export default function Page() {
  const { count, decrease, increase } = useCountStore((state) => state);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-80">
      <h1>
        Counter <span>{count}</span>
      </h1>

      <div className="flex gap-2">
        <button
          onClick={increase}
          className="border border-white p-1.5 font-medium rounded-md"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="border border-white p-1.5 font-medium rounded-md"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
