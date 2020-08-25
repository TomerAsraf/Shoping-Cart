import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [products, setProducts] = useState([
        { name: 'ball', price: 10, id: uuid() },
        { name: 'bed', price: 200, id: uuid() },
        { name: 'shirt', price: 15, id: uuid() },
        { name: 'dog', price: 0, id: uuid() },
        { name: 'cat', price: 0, id: uuid() },
        { name: 'apple', price: 3, id: uuid() },
        { name: 'phone', price: 1000, id: uuid() },
        { name: 'headphone', price: 500, id: uuid() }])

    const handleTotal = () => {

        setTotal(cart.reduce((acc, cur) => acc + cur.price, 0))
    }


    const addToCart = (item) => {
        setCart([...cart, item])
    }

    return (
        <ProductsContext.Provider value={{ products, setProducts, cart, setCart, addToCart, total, setTotal, handleTotal }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider
