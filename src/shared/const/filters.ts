export enum Filters {
  By_date = 'By date',
  By_alphabet = 'By alphabet',
  By_rating = 'By rating',
}
export interface filterType {
  value: string;
  label: string;
}
export const filters = [
  { value: Filters.By_date, label: Filters.By_date },
  { value: Filters.By_alphabet, label: Filters.By_alphabet },
  { value: Filters.By_rating, label: Filters.By_rating },
];
