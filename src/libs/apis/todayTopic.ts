import topics from "@/data/topics";

export const todayTopic = async (randomIndex: number) => {
  // 현재 시간
  const now = new Date();

  // 오늘 오후 6시
  const todaySixPm = new Date();
  todaySixPm.setHours(18, 12, 0); // 오후 6시로 설정
  console.log(todaySixPm, now);
  console.log(Date.parse(todaySixPm.toString()) - Date.parse(now.toString()));
  const revalidationTime =
    Date.parse(todaySixPm.toString()) - Date.parse(now.toString());
  // 두 시간의 차이를 밀리초 단위로 계산
  // const diffInMilliseconds = todaySixPm - now;

  // // 밀리초 단위를 초 단위로 변환
  // const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  // console.log(`현재 시간과 오늘 오후 6시 사이의 차이: ${diffInSeconds}초`);

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
