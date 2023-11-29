// CatalogFilter.jsx
import React, { useState } from 'react';
import { ApplyButton, LabelPrice, LabelType, LabelBrand, FiltersAll } from "./CatalogFilter.styled.jsx";
import "./catalogFilters.css";

const CatalogFilter = ({ applyFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedType, setSelectedType] = useState("Any");
  const [selectedBrand, setSelectedBrand] = useState("Any");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Any");

  const handleChange = (key, value) => {
    switch (key) {
      case 'minPrice':
        setMinPrice(value);
        break;
      case 'maxPrice':
        setMaxPrice(value);
        break;
      case 'sortBy':
        setSortBy(value);
        break;
      case 'type':
        setSelectedType(value);
        break;
      case 'brand':
        setSelectedBrand(value);
        break;
      case 'priceRange':
        setSelectedPriceRange(value);
        break;
      default:
        break;
    }
  };

  const handleApplyClick = () => {
    console.log('Applying filters:', {
      minPrice,
      maxPrice,
      sortBy,
      type: selectedType,
      brand: selectedBrand,
      priceRange: selectedPriceRange,
    });
  
    applyFilter({
      minPrice: minPrice !== "Any" ? minPrice : undefined,
      maxPrice: maxPrice !== "Any" ? maxPrice : undefined,
      sortBy: sortBy !== "Any" ? sortBy : undefined,
      type: selectedType !== "Any" ? selectedType : undefined,
      brand: selectedBrand !== "Any" ? selectedBrand : undefined,
      priceRange: selectedPriceRange !== "Any" ? selectedPriceRange : undefined,
    });
  };  

  return (
    <div>
      <FiltersAll>
        <LabelPrice>
          Price:
          <select
            value={selectedPriceRange}
            onChange={(e) => handleChange('priceRange', e.target.value)} className='price__select'
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
            onChange={(e) => handleChange('type', e.target.value)} className='type__select'
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
            onChange={(e) => handleChange('brand', e.target.value)} className='brand__select'
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