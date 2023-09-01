import { Content } from "./content.interface";
import { Pageable } from "./pageable.interface";
import { Sort } from "./sort.interface";

export interface ApiTeamResponse {
  content:          Content[];
  pageable?:         Pageable;
  totalPages?:       number;
  totalElements?:    number;
  last?:             boolean;
  numberOfElements?: number;
  sort?:             Sort;
  first?:            boolean;
  size?:             number;
  number?:           number;
  empty?:            boolean;
}
