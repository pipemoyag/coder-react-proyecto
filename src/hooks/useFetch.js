import { useState, useEffect } from "react";

export function useFetch(url, initialData = null) {
  const [data, setData] = useState(initialData); // permite definir un valor inicial
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false; // variable para evitar actualizar estados si el componente se desmonta antes que termine el fetch

    async function getData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    getData();
    return () => {
      // cuando se desmonta el componente, cancelaremos el fetch
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}
