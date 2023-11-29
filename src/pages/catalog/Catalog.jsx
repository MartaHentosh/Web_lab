import React, { useState, useEffect } from 'react';
import Elements from '../../components/elements/ElementsList';
import { getFridgeFiltered } from '../../api';
import CatalogFilters from '../../components/filters/CatalogFilters';

function Catalog() {
  const [elementsData, setElementsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getFridgeFiltered().then(response => setElementsData(response.data));
  }, []);

  const applyFilter = ({ minPrice, maxPrice, type, brand, priceRange }) => {
    getFridgeFiltered({ minPrice, maxPrice, type, brand, priceRange })
      .then(response => {
        console.log("Filtered data from server:", response.data);
        setFilteredData(response.data);
        setElementsData(response.data);
      })
      .catch(error => console.error("Error fetching filtered data:", error));
  };
  
  
  return (
    <div>
      <CatalogFilters applyFilter={applyFilter} />
      <Elements elementsData={filteredData.length > 0 ? filteredData : elementsData} />
    </div>
  );
}

export default Catalog;
