export type ApiResponse = {
  name: string;
  summary: string;
  datetime: string;
  type: string;
  url: string;
  location: { name: string; gps: number };
};
