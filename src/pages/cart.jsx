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
            <div className="row align-items-center row-items">
                <div className="col">
                    <img src={'/images/'+ prod.image} alt=""></img>
                </div>
                <div className="col">
                    <h4>{prod.title}</h4>
                </div>
                <div className="col">
                    <h4>${prod.price}</h4>
                </div>
                <div className="col">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
                    ))}
            
                    
            
                <Link className="btn btn-dark" to="/catalog">Catalog our amazing products</Link>
        </div>
    );
}

export default Cart;