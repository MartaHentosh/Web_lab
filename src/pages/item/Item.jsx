import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { elementsData } from "../../components/elements/ElementsList";
import './item.css';
import { NavLink } from 'react-router-dom';

const Item = () => {
  const { id } = useParams();
  const [element, setElement] = useState(null);

  useEffect(() => {
    const foundElement = elementsData.find((el) => el.id === parseInt(id));

    if (foundElement) {
      setElement(foundElement);
    }
  }, [id]);

  if (!element) {
    return <div>Element not found</div>;
  }

  return (
    <div className="element">
      <div className="element__content">
        <img className="element__image" src={element.imgSrc} alt={element.type} />
        <div className="element__container">
        <p className="element__brand">{element.brand}</p>
          <h1 className="element__type">{element.type}</h1>
          <p className="element__description">{element.description}</p>
          <span className='select__text'>Amount:</span>
          <label>
        <input className="count__input" type="number" name="countInput" min={1}/>
      </label>
      <span className='select__text'>Material:</span>
      <label>
        <select className='select__material' >
          <option value="Steel">Steel</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
        </select>
      </label>
        </div>
      </div>
    <div className='detail__filters'>
    </div>
      <div className="element__footer">
      <p className="element__price">Price: {element.price} $</p>
      <NavLink exact to={`/Catalog`}>
      <button className="element__button1">Go Back</button>
        </NavLink>
        <NavLink exact to={`/Cart`}>
        <button className="element__button2">Add to cart</button>
        </NavLink>
      </div>


    </div>
  );
};

export default Item;
