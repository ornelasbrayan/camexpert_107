import { useEffect } from "react";
import { useState } from "react";
import "./product.css";
import QuantityPicker from './quantityPicker';

function Product(props){

    const [quantity, setQuantity] = useState(1);

    useEffect(function(){
        // when the component loads
    },[]);

    function onQuantityChange(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function addProduct() {
        console.log(`Adding ${quantity} ${props.data.title}`);
    }


    return(
        <div className="product">
            <img src={"/images/" + props.data.image} />
            <h5>{props.data.title}</h5>
            <div className="prices">
            <label className="total">Total ${getTotal()}</label>
            <label className="price">Price ${props.data.price.toFixed(2)}</label>
            </div>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button className="add btn btn-sm btn-outline-danger" onClick={addProduct}>Add</button>
        </div>
    );
}

export default Product;