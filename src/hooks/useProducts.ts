import { useMemo } from "react";
import { products as staticProducts } from "../data/products";

export function useProducts() {
  const products = useMemo(() => [...staticProducts], []);

  return { products, isLoading: false, error: null };
}
