import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, plus, minus } from '../../redux/actions';
import './cart.css'

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


    return(
        <div className="cart__page">
            <div className="cart__elements">
                {elementsData.map((element) => (
                    <div className="cart__object">
                        {/* <img className='cart__img' src={imagePath} height={85} width={85}/> */}
                        <div className='cart__texts'>
                            <div className='cart__object__title'>
                                {element.elementData.type}
                            </div>
                            <div className='cart__object__strength'>
                                Strength: {element.elementData.brand}
                            </div>
                            <div className='cart__object__price'>
                                Price: {element.elementData && element.elementData.price} $
                            </div>
                        </div>
                        <div className='cart__object__right'>
                            <button className='cart__object__increment' onClick={() => handlePlus(element.elementData.id)}>
                                +
                            </button>
                            <div className='cart__object__amount'>
                                {element.amount}
                            </div>
                            <button className='cart__object__increment' onClick={() => handleMinus(element.elementData.id)}>
                                -
                            </button>
                            <div className='cart__object__total-price'>
                                {calculateTotalAmount(element.elementData.price, element.amount)} $
                            </div>
                            <button className='cart__object__remove' onClick={() => handleRemoveFromCart(element.elementData.id)}>
                                remove
                            </button>
                        </div>
                    </div>
                ))}
                <div className="cart__total">
                    Total: {elementsData.reduce((total, item) => total + calculateTotalAmount(item.elementData.price, item.amount), 0)} $
                </div>
            </div>
        </div>
    );
}

export default Cart;
