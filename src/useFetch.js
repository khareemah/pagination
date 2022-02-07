import React, { useState, useEffect } from 'react';
import paginate from './paginate';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setLoading(false);
    setData(paginate(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};

export default useFetch;
