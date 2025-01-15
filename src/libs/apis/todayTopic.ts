import topics from "@/data/topics";

export const todayTopic = async (randomIndex: number) => {
  // 현재 시간
  const now = new Date();

  // 오늘 오후 6시
  const min = now.getMinutes();
  const comparedTime = new Date();
  comparedTime.setHours(18, min + 3, 0); // 오후 6시로 설정
  const revalidationTime =
    (Date.parse(comparedTime.toString()) - Date.parse(now.toString())) / 1000;
  console.log("comparedTime", comparedTime, "currnetTime", now);
  console.log("revalidationTime", revalidationTime);

  const query = topics[randomIndex];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}v3/search/book?query=${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
      next: { revalidate: revalidationTime },
    },
  );

  const data = await res.json();

  return data.documents;
};
