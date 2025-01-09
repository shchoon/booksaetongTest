"use client";
// import axiosInstance from "./axiosInstance";
// import authors from "@/data/authors";
import topics from "@/data/topics";

// export const todayAuthors = async (randomIndex: number) => {
//   const res = await axiosInstance.get("/v3/search/book", {
//     params: {
//       query: authors[randomIndex],
//       target: "person",
//     },
//   });

//   return res.data.documents;
// };

export const todayAuthors = async (randomIndex: number) => {
  const query = topics[randomIndex];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}v3/search/book?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
      // next: { revalidate: 30 },
    },
  );

  const data = await res.json();
  // console.log(data.documents[0].title);
  return data.documents;
};
