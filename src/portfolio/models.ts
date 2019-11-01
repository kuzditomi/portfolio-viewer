export const columns = [
  "action",
  "underlying",
  "optionType",
  "optionTarget",
  "position",
  "expiration",
  "remainingDays"
] as const;

export type columns = typeof columns[number]; // Thanks typesciprt 3.4 !!!
