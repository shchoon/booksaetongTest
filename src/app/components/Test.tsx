import topics from "@/data/topics";

export default async function Test(randomIndex: number) {
  const query = topics[randomIndex];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}v3/search/book?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      },
      next: { revalidate: 10 },
    },
  );

  const data = await res.json();
  return data.documents;

  //   fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}v3/search/book?query=${encodeURIComponent(query)}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
  //       },
  //       next: { revalidate: 10 },
  //     },
  //   )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
}
