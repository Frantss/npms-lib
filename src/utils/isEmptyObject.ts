export const isEmptyObject = <T extends Record<string, any>>(
  value: T,
): boolean =>
  Object.keys(value).length === 0 ||
  !Object.values(value).some(v => v === undefined);
