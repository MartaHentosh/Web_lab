import React, { useState, useEffect } from 'react';
import Elements from '../../components/elements/ElementsList';
import { getFridgeFiltered } from '../../api';
import CatalogFilters from '../../components/filters/CatalogFilters';
import Loader from '../../components/spinner/Loader';

function Catalog() {
  const [elementsData, setElementsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hasData, setHasData] = useState(true);
  const [loading, setLoading] = useState(true);

  const applyFilter = ({ minPrice, maxPrice, type, brand, priceRange }) => {
    setLoading(true);
    getFridgeFiltered({ minPrice, maxPrice, type, brand, priceRange })
      .then(response => {
        console.log("Filtered data from server:", response.data);
        const filteredData = response.data;
        setFilteredData(filteredData);
        setHasData(filteredData.length > 0);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching filtered data:", error);
        setHasData(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getFridgeFiltered({})
      .then(response => {
        console.log("Initial data from server:", response.data);
        const initialData = response.data;
        setElementsData(initialData);
        setFilteredData(initialData);
        setHasData(initialData.length > 0);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching initial data:", error);
        setHasData(false);
        setLoading(false);
      });
  }, []);  

  return (
    <div>
      <CatalogFilters applyFilter={applyFilter} />
      {loading ? (
        <Loader />
      ) : (
        hasData ? <Elements elementsData={filteredData} /> : <p>No matching elements found.</p>
      )}
    </div>
  );  
}

export default Catalog;
