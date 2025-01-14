export default function RandomIndex() {
  const CD = new Date().toLocaleString();
  console.log(CD);

  const secOfCT = Number(CD.slice(CD.length - 2, CD.length));
  console.log(secOfCT);

  if (secOfCT > 14) {
    return Math.floor(secOfCT / 5);
  }

  return secOfCT;
}
