const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
      return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE') {
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      }
    }
    
    throw new Error('no matching action type')
  }
  
  export default reducer