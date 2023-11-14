import React, { useState } from 'react';
import './catalogFilters.css';
import Select from '../select/Select';

const CatalogFilters = () => {
    const typeOptions = [
        { value: "type", label: "Any type" },
        { value: "type", label: "Yellow Fridge" },
        { value: "type", label: "Multicolor Fridge" },
        { value: "type", label: "Black Fridge" },
        { value: "type", label: "Grey Fridge" },
    ];

    const brandOptions = [
        { value: "brand", label: "Any brands" },
        { value: "brand", label: "Samsung" },
        { value: "brand", label: "Philipes" },
    ];

    const priceOptions = [
        { value: "price", label: "Any price" },
        { value: "price", label: "up to 2000$" },
        { value: "price", label: "more than 2000$" },
    ];

    const typeSettings = {
        id: 'filters__by-type',
        label: 'Filter by type:',
        name: 'type',
        class_name: 'type',
    }

    const brandSettings = {
        id: 'filters__by-brand',
        label: 'Filter by brand:',
        name: 'brand',
        class_name: 'brand',
    }

    const priceSettings = {
        id: 'filters__by-price',
        label: 'Filter by price:',
        name: 'price',
        class_name: 'price',
    }

    const selectArray = [
        { options: typeOptions, settings: typeSettings },
        { options: priceOptions, settings: priceSettings },
        { options: brandOptions, settings: brandSettings },
    ];

    const [selectedFilters, setSelectedFilters] = useState({
        type: 'Any type',
        brand: 'Any brands',
        price: 'Any price',
    });

    const [items, setItems] = useState([
        { id: 1, type: "Yellow Fridge", brand: "Samsung", price: 1500 },
        { id: 2, type: "Yellow Fridge", brand: "Samsung", price: 1900 },
        { id: 3, type: "Multicolor Fridge", brand: "Philipes", price: 2699 },
        { id: 4, type: "Multicolor Fridge", brand: "Philipes", price: 2100 },
        { id: 5, type: "Black Fridge", brand: "Philipes", price: 2999 },
        { id: 6, type: "Grey Fridge", brand: "Samsung", price: 3000 },
    ]);

    const handleApplyFilters = () => {
        // Filter the items based on the selected filters
        const filteredItems = items.filter(item => {
            const typeFilter = selectedFilters.type === 'Any type' || item.type === selectedFilters.type;
            const brandFilter = selectedFilters.brand === 'Any brands' || item.brand === selectedFilters.brand;
            // Add more filters as needed
    
            return typeFilter && brandFilter;
        });
    
        // Sort the filtered items based on the price
        const sortedItems = filteredItems.slice().sort((a, b) => {
            if (selectedFilters.price === 'up to 2000$') {
                return a.price - b.price;
            } else if (selectedFilters.price === 'more than 2000$') {
                return b.price - a.price;
            }
    
            // No specific price filter, maintain the order
            return 0;
        });
    
        // Now you can use sortedItems to update your UI or perform further actions
        console.log(sortedItems);
    };

    return (
        <section className="filters">
            <div className="filters__all">
                {selectArray.map((select, index) => (
                    <Select
                        key={index}
                        options={select.options}
                        settings={select.settings}
                        selectedValue={selectedFilters[select.settings.name]}
                        onSelectChange={(value) =>
                            setSelectedFilters((prevFilters) => ({
                                ...prevFilters,
                                [select.settings.name]: value,
                            }))
                        }
                    />
                ))}
                <button
                    type="button"
                    className="apply-button"
                    id="apply-button"
                    onClick={handleApplyFilters}
                >
                    Apply
                </button>
            </div>
        </section>
    );
};

export default CatalogFilters;

