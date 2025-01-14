export default function RandomIndex() {
  const CD = new Date().toLocaleString();

  const secOfCT = Number(CD.slice(CD.length - 2, CD.length));

  if (secOfCT > 14) {
    return Math.floor(secOfCT / 5);
  }

  return secOfCT;
}
