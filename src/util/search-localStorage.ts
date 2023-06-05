export default function searchLocalStorage(
  key: string,
  defaultValue: number,
): number {
  const storedValue = localStorage.getItem(key);
  if (storedValue) return parseInt(storedValue);
  return defaultValue;
}
