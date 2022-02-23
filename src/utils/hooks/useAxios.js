import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [dataReady, setDataReady] = useState(false);

  const getUsersData = () => {
    axios(url)
      .then((response) => {
        setUser(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    getUsersData();
    const lazyDataLoading = setTimeout(() => {
      setDataReady(true);
    }, 5000);

    return () => {
      clearTimeout(lazyDataLoading);
    };
  }, []);

  return { user, isLoading, hasError, dataReady };
};

export default useAxios;
