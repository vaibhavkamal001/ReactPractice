import { useCallback, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async (useConfig, afterFetch) => {
    console.log(useConfig);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(useConfig.url, {
        method: useConfig.method ? useConfig.method : "GET",
        body: useConfig.body ? JSON.stringify(useConfig.body) : null,
        headers: useConfig.headers ? useConfig.headers : {},
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Request failed!");
      }

      const data = await response.json();
      afterFetch(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    fetchTasks,
  };
};

export default useFetch;
