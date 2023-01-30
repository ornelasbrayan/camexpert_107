import "./product.css";
import QuantityPicker from './quantityPicker';

function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/300/270" />
            <h5>Canon Camera T100</h5>
            <div className="prices">
            <label>Total</label>
            <label>Price</label>
            </div>
            <QuantityPicker></QuantityPicker>
            <button className="add btn btn-sm btn-outline-danger">Add</button>
        </div>
    );
}

export default Product;