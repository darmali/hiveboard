import { SQL, asc } from "drizzle-orm";
import { PgColumn, PgSelect } from "drizzle-orm/pg-core";

export function withPagination<T extends PgSelect>(
  qb: T,
  orderByColumn: PgColumn | SQL | SQL.Aliased,
  pageNumber = 1,
  pageSize = 10
) {
  if (pageSize > 10) {
    pageSize = 10;
  }
  return qb
    .orderBy(orderByColumn)
    .limit(pageSize)
    .offset((pageNumber - 1) * pageSize);
}