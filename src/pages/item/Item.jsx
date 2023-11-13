// Item.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { elementsData } from "../../components/elements/ElementsList";

const Item = () => {
  const { id } = useParams();
  const [element, setElement] = useState(null);

  useEffect(() => {
    // Find the element with the given id when the component mounts
    const foundElement = elementsData.find((el) => el.id === parseInt(id));

    if (foundElement) {
      setElement(foundElement);
    }
  }, [id]);

  if (!element) {
    return <div>Element not found</div>;
  }

  return (
    <div>
      <h1>{element.type}</h1>
      <img src={element.imgSrc} alt={element.type} />
      <p>{element.description}</p>
      <p>Brand: {element.brand}</p>
      <p>Price: {element.price} $</p>
    </div>
  );
};

export default Item;
