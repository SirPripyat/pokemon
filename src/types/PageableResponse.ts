export type PageableResponse<T> = {
  data: T[];
  meta: {
    total: number;
    page: number;
    totalPages: number;
  };
};
