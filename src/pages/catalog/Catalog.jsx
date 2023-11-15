import React, { useState, useEffect } from 'react';
import Elements, { elementsData } from '../../components/elements/ElementsList';
import CatalogFilters from '../../components/filters/CatalogFilters';


function Catalog() {
  const [filteredData, setFilteredData] = useState(elementsData);

  const applyFilter = ({ minPrice, maxPrice, type, brand, priceRange }) => {
  
    const actualMinPrice = minPrice === "" ? 0 : parseInt(minPrice, 10);
  
    let result = elementsData.filter((item) => {
      return (
        (actualMinPrice === 0 || item.price >= actualMinPrice) &&
        (maxPrice === "" || item.price <= parseInt(maxPrice, 10)) &&
        (type === "Any" || item.type === type) &&
        (brand === "Any" || item.brand === brand)
      );
    });
  
    if (priceRange === "0-2000") {
      result = result.filter((item) => item.price >= 0 && item.price <= 2000);
    } else if (priceRange === "2000") {
      result = result.filter((item) => item.price > 2000);
    }
  
    setFilteredData(result);
  };
  
  return (
    <div>
      <CatalogFilters applyFilter={applyFilter} />
      <Elements elementsData={filteredData} />
    </div>
  );
}

export default Catalog;
