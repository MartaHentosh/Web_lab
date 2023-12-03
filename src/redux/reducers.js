const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        const elementDataStoreId = state.cart.findIndex((item) => item.elementData.id === action.payload.elementData.id);
  
        if (elementDataStoreId !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[elementDataStoreId].amount += action.payload.amount;
  
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
  
          return {
            ...state,
            cart: [...state.cart, action.payload],
          };
        }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.elementData.id !== action.payload),
        };
  
      case 'PLUS':
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.elementData.id === action.payload) {
              return {
                ...item,
                amount: item.amount + 1,
              };
            }
            return item;
          }),
        };
  
      case 'MINUS':
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.elementData.id === action.payload && item.amount > 1) {
              return {
                ...item,
                amount: item.amount - 1,
              };
            }
            return item;
          }),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  