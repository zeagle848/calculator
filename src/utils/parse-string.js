export function parseStringForDisplay(float) {
  const numString = float.toString();
  const number = float;
  const pointIndex = numString.indexOf('.');
  if (pointIndex === -1) {
    return numString.length >= 9 ? number.toExponential(2) : number;
  }
  return pointIndex >= 9 ? number.toExponential(2) : number.toFixed(2);
}
