function searchLocalStorageOrReturnDefaultValue(
  key: string,
  defaultValue: number,
): number {
  const storedValue = localStorage.getItem(key);
  if (storedValue) return parseInt(storedValue);
  return defaultValue;
}

function returnFromLocalStorage(key: string): number | null {
  const data = localStorage.getItem(key);
  if (data) return parseInt(data);
  return null;
}

export { searchLocalStorageOrReturnDefaultValue, returnFromLocalStorage };
