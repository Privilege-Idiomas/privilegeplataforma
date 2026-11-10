import type { CatalogRepository } from "./catalog-repository";
import { InMemoryCatalogRepository } from "./in-memory-catalog-repository";

export type { CatalogRepository } from "./catalog-repository";
export type * from "./types";
export { InMemoryCatalogRepository } from "./in-memory-catalog-repository";

/** F1: apenas o adaptador em memória com dados fictícios. */
export function getCatalogRepository(): CatalogRepository {
  return new InMemoryCatalogRepository();
}
