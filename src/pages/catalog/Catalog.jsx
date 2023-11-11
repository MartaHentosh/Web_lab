import React from 'react';
import Elements from '../../components/elements/ElementsList';
import CatalogFilters from '../../components/filters/CatalogFilters';

function Catalog() {
  return (
    <div>
      <CatalogFilters />
      <Elements data={Elements} />
    </div>
  );
};

export default Catalog;
