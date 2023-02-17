import "./adminProducts.css"
import { useState } from 'react';

function AdminProducts(){

    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    
    function textChanged(e) {
        let text = e.target.value;
        let attr = e.target.name;
        
        let copy = {...product};
        copy[attr] = text;
        setProduct(copy);
    }
    
    function saveProduct() {
        console.log(product);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
        <div className="ad-products">
            <h2>Admin Products</h2>
            <div className="forms">

                <div className="my-control">
                    <label className="form-label">Title</label>
                    <input name="title" onChange={textChanged} className="form-control" type="text" />
                </div>

                <div>
                <label className="form-label">Category</label>
                    <select name="category" onChange={textChanged} class="form-select" aria-label="Default select example">
                        <option disabled selected>select the category</option>
                        <option value="Camera">Camera</option>
                        <option value="Video Camera">Video Camera</option>
                        <option value="Flash">Flash</option>
                    </select>
                </div>

                <div>
                    <label className="form-label">Image</label>
                    <input name="image" onChange={textChanged} className="form-control" type="text" />
                </div>

                <div>
                    <label className="form-label">Price</label>
                    <input name="price" onChange={textChanged} className="form-control" type="text" />
                </div>

                <div className="my-control center">
                    <button onClick={saveProduct} className="btn btn-dark">Save</button>
                </div>
            </div>

            <ul>
                {allProducts.map(prod => <li key={prod.title}>{prod.title}</li>)}
            </ul>

        </div>
    );
}

export default AdminProducts;