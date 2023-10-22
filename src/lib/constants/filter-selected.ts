interface Options {
  label: string;
  value: string | number;
}
export const TRANSIT: Options[] = [
  {
    value: 0,
    label: " Dừng 0",
  },
  {
    value: 1,
    label: " Dừng 1 trạm",
  },
  {
    value: 2,
    label: "Dừng 2 trạm",
  },
  {
    value: 3,
    label: "Dừng 3 trạm",
  },
];
export const PRICE_SORT: Options[] = [
  {
    value: "ASC",
    label: "Low Price",
  },
  {
    value: "DESC",
    label: "Hight Price",
  },
];
export const AIRLINE: Options[] = [
  {
    value: "VN",
    label: "VN",
  },
  {
    value: "VJ",
    label: "VJ",
  },
  {
    value: "QH",
    label: "QH",
  },
];
