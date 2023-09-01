import { Sort } from "./sort.interface";

export interface Pageable {
  sort:       Sort;
  pageNumber: number;
  pageSize:   number;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}
