"use client";
type IProps = {
  randomIndex: number;
  topic: string;
};
export default function HomeCompo({ randomIndex, topic }: IProps) {
  console.log("client", randomIndex);
  return (
    <strong>
      {randomIndex} {topic}
    </strong>
  );
}
