export const filterById = <T, K extends keyof T>(
  list: T[],
  key: K,
  value: T[K]
): T[] => list.filter((item) => item[key] === value);
