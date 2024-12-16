import { useState, useEffect } from "react";

const useFetchData = (apiRoute) => {
  // This custom hook fetches data from the API based on the apiRoute
  // and returns the data, loading state, and error state
  // The data is fetched when the component mounts

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
