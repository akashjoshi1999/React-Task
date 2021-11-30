import React, { Fragment, useState } from 'react'
import Cart from '../Cart/Cart';
import Header from '../Layout/Header';
import Meals from '../Meals/Meals'
import CartProvider from '../Store/CartProvider';

const FoodOrderApp = () => {

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    )
}

export default FoodOrderApp
