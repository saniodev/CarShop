import React, { useState } from "react";
function ProductsForms() {
    const [carProduct, setCarProduct] = useState([]);
    const [carValor, setCarValor] = useState([]);
    const [count, setCount] = useState(0);

    const products = [
        'Camera',
        'Shoes',
        'Handbag',
        'Smartphone',
        'Sweater',
        'Watch',
        'Headphones',
        'Book',
        'Ring'
    ];
    const handleChanger = (e) => {
        const { name, value} = e.target;
        setCarValor(prevState => [value, ...prevState]);
        return value;
    };

    const addItemToCart = (e) => {
        e.preventDefault();
        setCarProduct(prevState => [carValor.find((e) => e), ...prevState]);
        setCount(count + 1);

    }

    return (
        <form>
            {carProduct.length > 0 ? <h2>You have {count} item(s) in your cart</h2> : <h2>Add Some Items</h2>}
            <ul>{carProduct.map((myList) => <li>{myList}</li>)}</ul>
            <div>Product:
            <select onClick={handleChanger}>
               {products.map((prod) => <option name="prod">{prod}</option>)}
            </select>
            </div>
            <button type="submit" onClick={addItemToCart}>Add Product</button>
        </form>
    );
}

export default ProductsForms;