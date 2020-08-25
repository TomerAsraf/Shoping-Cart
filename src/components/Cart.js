import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContextProvider';

const Cart = () => {

    const { cart, total } = useContext(ProductsContext);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ITEM</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, i) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}$</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <hr />
            <h3>Subtotal: {total}$</h3>
        </div>
    )
}

export default Cart
