import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Product } from "../types";

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setProduct(data as Product | null);
        setLoading(false);
      });
  }, [id]);

  return { product, loading, error };
}