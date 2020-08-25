import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContextProvider'
import { useHistory } from 'react-router-dom';
import '../style/Home.css'

const Home = () => {
    let history = useHistory()

    const { products, addToCart, handleTotal } = useContext(ProductsContext);

    return (
        <div>
            <div className='title'>

            </div>
            <h1 onClick={() => {
                handleTotal()
                history.push('/cart')
            }}>Cart</h1>
            <table className='content-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>ADD TO CART</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, i) => {
                        return <tr key={item.id}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}$</td>
                            <td><button onClick={() => {
                                addToCart(item)
                            }}>ADD</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
