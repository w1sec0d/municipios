import { useState, useEffect } from "react";

const useFetchData = (apiRoute) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (route) => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/" + route
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(apiRoute);
  }, [apiRoute]);

  return { data, loading, error };
};

export default useFetchData;
