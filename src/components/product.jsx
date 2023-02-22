import { useEffect, useState, useContext } from "react";
import "./product.css";
import QuantityPicker from './quantityPicker';
import DataContext from "../store/dataContext";

function Product(props){

    const [quantity, setQuantity] = useState(1);

    useEffect(function(){
        // when the component loads
    },[]);

    let addProductToCart = useContext(DataContext).addProductsToCart;

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

    function handleAdd(){
        console.log("Button clicked!", props.data);
        addProductToCart(props.data);
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
            <button className="add btn btn-sm btn-outline-danger" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Product;