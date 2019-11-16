export const columns = [
  'action',
  'underlying',
  'optionType',
  'optionTarget',
  'position',
  'price',
  'expiration',
  'remainingDays'
] as const;

export type columns = typeof columns[number]; // Thanks typescript 3.4 !!!

export interface PortfolioSummary {
  TotalPL: number;
}