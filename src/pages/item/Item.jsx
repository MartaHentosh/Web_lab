import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFridgeInfo } from "../../api";
import Loader from "../../components/spinner/Loader";
import './item.css';
import { NavLink } from 'react-router-dom';
import img_static from "../../fridgeImages/fridge1.jpg";

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
        console.error("Error:", error);
      });
  }, [id]);

  const imagePath = img_static;

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div className="element">
          <div className="element__content">
            {/* <img className="element__image" src={elementsData.imgSrc} alt={elementsData.type} /> */}
            <img className={elementsData.element__image} src={img_static} alt={elementsData .img_title} height="500" width="350"/>
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
