import React, { useState } from 'react';
import { ApplyButton, LabelPrice, LabelType, LabelBrand, FiltersAll } from "./CatalogFilter.styled.jsx";
import "./catalogFilters.css"

const CatalogFilter = ({ applyFilter }) => {
  const [minPrice] = useState("");
  const [maxPrice] = useState("");
  const [sortBy] = useState("");
  const [selectedType, setSelectedType] = useState("Any");
  const [selectedBrand, setSelectedBrand] = useState("Any");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Any");

  const handleApplyClick = () => {

    applyFilter({
      minPrice,
      maxPrice,
      sortBy,
      type: selectedType,
      brand: selectedBrand,
      priceRange: selectedPriceRange,
    });
  };

  return (
    <div>
      <FiltersAll>
      <LabelPrice>
        Price:
        <select
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)} className='price__select'
        >
          <option value="Any">Any Price</option>
          <option value="0-2000">Up to $2000</option>
          <option value="2000">Above $2000</option>
        </select>
      </LabelPrice>

     <LabelType>
        Type:
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)} className='type__select'
        >
          <option value="Any">Any Type</option>
          <option value="Yellow Fridge">Yellow Fridge</option>
          <option value="Multicolor Fridge">Multicolor Fridge</option>
          <option value="Black Fridge">Black Fridge</option>
          <option value="Grey Fridge">Grey Fridge</option>

        </select>
      </LabelType>

      <LabelBrand>
        Brand:
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)} className='brand__select'
        >
          <option value="Any">Any Brand</option>
          <option value="Philipes">Philipes</option>
          <option value="Samsung">Samsung</option>
        </select>
      </LabelBrand>

      <ApplyButton onClick={handleApplyClick}>
        <p>Apply</p>
      </ApplyButton>
      </FiltersAll>
    </div>
  );
};

export default CatalogFilter;