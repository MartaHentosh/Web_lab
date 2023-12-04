import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFridgeInfo } from "../../api";
import Loader from "../../components/spinner/Loader";
import './item.css';
import { NavLink } from 'react-router-dom';
import img_static from "../../fridgeImages/fridge1.jpg";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions'

const Item = () => {
  const { id } = useParams();
  const [elementsData, setElementsData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();
  const imagePath = img_static;

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

  const inputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleAddToCart = () => {
    if (!Number.isNaN(parseInt(inputValue, 10))) {
      let amount = parseInt(inputValue, 10);

      if (amount > 0) {
        dispatch(addToCart(elementsData, amount));
        alert("Your object added to cart");
      } else {
        alert("Please enter a valid number");
      }
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div className="element">
          <div className="element__content">
            <img className="element__image" src={img_static} alt={elementsData.img_title} />
            <div className="element__container">
              <p className="element__brand">{elementsData.brand}</p>
              <h1 className="element__type">{elementsData.type}</h1>
              <p className="element__description">{elementsData.description}</p>
              <span className='select__text'>Amount:</span>
              <label>
                <input className="count__input" type="number" name="countInput" placeholder="1" min={1} onChange={inputChange} />
              </label>
            </div>
          </div>
          <div className="element__footer">
            <p className="element__price">Price: {elementsData.price} $</p>
            <NavLink exact to={`/Catalog`}>
              <button className="element__button1">Go Back</button>
            </NavLink>
            {/* <div className="element__button2"> */}
            <button className="element__button2" onClick={handleAddToCart}>Add to cart</button>
            {/* </div> */}
          </div>


        </div>
      )}
    </section>
  )
};

export default Item;
