// Catalog.jsx
import React, { useState, useEffect } from 'react';
import Elements from '../../components/elements/ElementsList';
import { getFridgeFiltered } from '../../api';
import CatalogFilters from '../../components/filters/CatalogFilters';

function Catalog() {
  const [elementsData, setElementsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const applyFilter = ({ minPrice, maxPrice, type, brand, priceRange }) => {
    getFridgeFiltered({ minPrice, maxPrice, type, brand, priceRange })
      .then(response => {
        console.log("Filtered data from server:", response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error("Error fetching filtered data:", error));
  };

  useEffect(() => {
    getFridgeFiltered({})  // Initial load with no filters
      .then(response => {
        console.log("Initial data from server:", response.data);
        setElementsData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error("Error fetching initial data:", error));
  }, []);  

  return (
    <div>
      <CatalogFilters applyFilter={applyFilter} />
      {/* Pass elementsData as props to Elements component */}
      <Elements elementsData={filteredData.length > 0 ? filteredData : elementsData} />
    </div>
  );  
}

export default Catalog;