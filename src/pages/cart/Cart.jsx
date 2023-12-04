import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, plus, minus } from '../../redux/actions';
import './cart.css'
import img_static from '../../fridgeImages/fridge1.jpg'

function Cart() {
    const elementsData = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (elementDataId) => {
        dispatch(removeFromCart(elementDataId));
    };

    const handlePlus = (elementDataId) => {
        dispatch(plus(elementDataId));
    };

    const handleMinus = (elementDataId) => {
        dispatch(minus(elementDataId));
    };

    const totalAmount = elementsData.reduce((total, item) => {
        return total + item.elementData.price * item.amount;
    }, 0);

    const calculateTotalAmount = (price, amount) => {
        return price * amount;
    };

    const imagePath = img_static;

    const goBack = () => {
        window.history.back();
    };

    return(
        <div className="cart__page">
            <div className="cart__elements">
                {elementsData.map((element) => (
                    <div className="cart__object">
                        <img className='cart__img' src={imagePath} height={85} width={85}/>
                        <div className='cart__texts'>
                            <div className='cart__type'>
                                {element.elementData.type}
                            </div>
                            <div className='cart__brand'>
                                Brand: {element.elementData.brand}
                            </div>
                            <div className='cart__price'>
                                Price: {element.elementData && element.elementData.price} $
                            </div>
                        </div>
                        <div className='cart__object__right'>
                            <button className='button__plus' onClick={() => handlePlus(element.elementData.id)}>
                                +
                            </button>
                            <div className='cart__amount'>
                                {element.amount}
                            </div>
                            <button className='button__minus' onClick={() => handleMinus(element.elementData.id)}>
                                -
                            </button>
                            <div className='cart__total-price'>
                                {calculateTotalAmount(element.elementData.price, element.amount)} $
                            </div>
                            <button className='button__remove' onClick={() => handleRemoveFromCart(element.elementData.id)}>
                                remove
                            </button>
                        </div>
                    </div>
                ))}
                <div className="cart__total">
                    Total amount: {elementsData.reduce((total, item) => total + calculateTotalAmount(item.elementData.price, item.amount), 0)} $
                </div>
                <div className="cart__buttons">
                    <button className='button__go-back' onClick={goBack}>
                        Go Back
                    </button>
                    <button className='button__continue'>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;