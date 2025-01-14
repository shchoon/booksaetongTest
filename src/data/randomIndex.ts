export default function RandomIndex() {
  const currentMin = new Date().getMinutes();
  console.log(currentMin);

  if (currentMin > 14) {
    return Math.floor(currentMin / 5);
  }

  return currentMin;
}
