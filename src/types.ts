export interface ApiResponse {
  name: string;
  summary: string;
  datetime: string;
  location: { name: string; gps: number };
}
