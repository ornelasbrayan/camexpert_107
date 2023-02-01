import { useEffect } from "react";
import "./product.css";
import QuantityPicker from './quantityPicker';

function Product(props){

    useEffect(function(){
        // when the component loads
        console.log("Hello, I'm a product");
    },[]);

    return(
        <div className="product">
            <img src={"/images/" + props.data.image} />
            <h5>{props.data.title}</h5>
            <div className="prices">
            <label>Total ${props.data.price}</label>
            <label>Price ${props.data.price}</label>
            </div>
            <QuantityPicker></QuantityPicker>
            <button className="add btn btn-sm btn-outline-danger">Add</button>
        </div>
    );
}

export default Product;