export function toggleSignEvent(currentValue) {
  if (currentValue === '0') {
    return '0';
  }
  return currentValue.includes('-')
    ? currentValue.substring(1, currentValue.length)
    : `-${currentValue}`;
}
