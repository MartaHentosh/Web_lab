import './catalogFilters.css'
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

    return (
        <section className="filters">
            <div className="filters__all">
                {selectArray.map((select, index) => (
                    <Select key={index} options={select.options} settings={select.settings} />
                ))}
                <button type="button" className="apply-button" id="apply-button"><a>Apply</a></button>
            </div>
        </section>
    );
};

export default CatalogFilters;


