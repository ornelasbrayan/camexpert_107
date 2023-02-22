import "./cart.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../store/dataContext";

function Cart(){

    const cart = useContext(DataContext).cart;

    return (
        <div className="cart">
            <h1>Welcome to Cam Expert store</h1>
            <h4> You have {cart.length} products in the cart</h4>
                    {cart.map((prod)=>(
            <div className="prod-row">
                    <img src={'/images/'+ prod.image} alt=""></img>
                    <h4>{prod.title}</h4>
                    <label>{prod.price}</label>
                    <button className="btn btn-dark">Delete</button>
            </div>
                    ))}
            
                    
            
                <Link className="btn btn-dark" to="/catalog">Catalog our amazing products</Link>
        </div>
    );
}

export default Cart;