import topics from "@/data/topics";

export const todayTopic = async (randomIndex: number) => {
  const now = new Date();
  const setTime = new Date();
  setTime.setHours(12, 20, 0);

  console.log(now, setTime);
  console.log(Date.parse(now.toString()), Date.parse(setTime.toString()));

  if (Date.parse(now.toString()) > Date.parse(setTime.toString())) {
    setTime.setHours(36, 20, 0);
  }

  const revalidationTime =
    (Date.parse(now.toString()) - Date.parse(setTime.toString())) / 1000;

  // const hour = now.getHours(),
  //   min = now.getMinutes();
  // const comparedTime = new Date();
  // console.log("now", now.toISOString(), "setTime", now.setHours(12, 30, 0));
  // comparedTime.setHours(hour - 9, min + 5, 0);
  // console.log(Date.parse(comparedTime.toString()), Date.parse(now.toString()));
  // const revalidationTime =
  //   (Date.parse(comparedTime.toString()) - Date.parse(now.toString())) / 1000;
  // console.log("comparedTime", comparedTime, "currnetTime", now);
  // console.log("revalidationTime", revalidationTime);

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
