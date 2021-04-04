export class PagedResult2<T>{
  offset: number = 0;
  limit: number = 20;
  totalItems: number = 0;
  items: T[] = [];
}
