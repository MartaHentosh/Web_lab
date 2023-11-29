import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFridgeInfo } from "../../api";
import Loader from "../../components/spinner/Loader";
// import { elementsData } from '../../../../server';
// import Elements from "../../components/elements/ElementsList";
import './item.css';
import { NavLink } from 'react-router-dom';

const Item = () => {
  const { id } = useParams();
  const [elementsData, setElementsData] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getFridgeInfo(id)
      .then((response) => {
        setElementsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних про камінь:", error);
      });
  }, [id]);

  // const imagePath = img_static;



  // const { id } = useParams();
  // const [element, setElement] = useState(null);

  // useEffect(() => {
  //   const foundElement = elementsData.find((el) => el.id === parseInt(id));

  //   if (foundElement) {
  //     setElement(foundElement);
  //   }
  // }, [id]);

  // if (!element) {
  //   return <div>Element not found</div>;
  // }

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div className="element">
          <div className="element__content">
            <img className="element__image" src={elementsData.imgSrc} alt={elementsData.type} />
            <div className="element__container">
              <p className="element__brand">{elementsData.brand}</p>
              <h1 className="element__type">{elementsData.type}</h1>
              <p className="element__description">{elementsData.description}</p>
              <span className='select__text'>Amount:</span>
              <label>
                <input className="count__input" type="number" name="countInput" min={1} />
              </label>
              <div>
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
          </div>
          <div className='detail__filters'>
          </div>
          <div className="element__footer">
            <p className="element__price">Price: {elementsData.price} $</p>
            <NavLink exact to={`/Catalog`}>
              <button className="element__button1">Go Back</button>
            </NavLink>
            <NavLink exact to={`/Cart`}>
              <button className="element__button2">Add to cart</button>
            </NavLink>
          </div>


        </div>
            )}
    </section>
)};

export default Item;
