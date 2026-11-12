import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Product } from "../types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .order("name")
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setProducts((data ?? []) as Product[]);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}