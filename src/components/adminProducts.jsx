import "./adminProducts.css"
import { useState, useEffect } from 'react';
import DataService from "../services/dataService";

function AdminProducts(){

    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    useEffect(function(){
        loadCatalog();
    },[]);
    
    function textChanged(e) {
        let text = e.target.value;
        let attr = e.target.name;
        
        let copy = {...product};
        copy[attr] = text;
        setProduct(copy);
    }
    
    async function saveProduct() {
        console.log(product);
        let savedProd = {...product};
        savedProd.price = parseFloat(savedProd.price);
        let service = new DataService();
        service.saveProduct(savedProd);
        

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    async function loadCatalog(){
        let service = new DataService();
        let prod = await service.getProducts();
        setAllProducts(prod);

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

                <h3>Products on catalog</h3>

            </div>

            <ul className="list-group list-group-flush ulist">
                {allProducts.map(prod => <li className="list-group-item" key={prod.title}>{prod.title} - ${prod.price}</li>)}
            </ul>

        </div>
    );
}

export default AdminProducts;