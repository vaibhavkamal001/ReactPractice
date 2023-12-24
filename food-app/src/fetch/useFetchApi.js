import { useCallback, useState } from "react";

const useFetchApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const fetchFun = useCallback(async (config, afterFunction) => {
    setLoading(true);
    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!response.ok) {
        throw new TypeError("Something went worng!");
      }

      const data = await response.json();

      afterFunction(data);
    } catch (error) {
      setLoading(false);
      setHttpError(error.message);
    }
    setLoading(false);
  }, []);

  return { fetchFun, isLoading, httpError };
};

export default useFetchApi;
