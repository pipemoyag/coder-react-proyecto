import { useEffect, useState, useRef } from "react";

// funcion para abarcar manejo de espera (loading) y errores en cada llamada asincrónica a firebase
// deps: array de dependencias, por defecto vacio
// initialData: valor inicial para el estado que se va a manejar con esta llamada asincrónica

export function useAsync(asyncFunction, deps = [], initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ID único por ejecución => evita race conditions (que una rpta antigua sobrescriba el estado con datos obsoletos)
  const callId = useRef(0);

  useEffect(() => {
    let isMounted = true; // si se desmontara el componente, no queremos mas manejo de estados
    const id = ++callId.current; // callId, que es un contador persistente entre renders, incrementa el contador y devuelve el nuevo valor

    // cada vez que se recarge el componente se resetean los estados loading y error
    setLoading(true);
    setError(null);

    asyncFunction()
      .then((result) => {
        if (!isMounted) return;
        if (id !== callId.current) return; // si callId ya cambió, evitamos escribir datos viejos

        setData(result);
      })
      .catch((err) => {
        if (!isMounted) return;
        if (id !== callId.current) return;

        setError(err);
      })
      .finally(() => {
        if (!isMounted) return;
        if (id !== callId.current) return;

        setLoading(false);
      });

    // cleanup al desmontar
    return () => {
      isMounted = false;
    };
  }, deps);

  return { data, loading, error };
}
