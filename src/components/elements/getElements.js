import React, { useState, useEffect } from 'react';
import { getFridges } from "../../api";

const GetElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFridges();
      setElements(data);
    };

    fetchData();
  }, []);

  return elements;
};

export default GetElements;
