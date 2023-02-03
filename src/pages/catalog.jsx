import "./catalog.css";
import Product from '../components/product';
import { useState } from 'react';
import { useEffect } from 'react';
import DataService from './../services/dataService';

function Catalog(){

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    useEffect(function(){
        // when the component loads, do something
        loadCatalog();
    },[]);
    
    function loadCatalog() {
        // get the products from the service
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);
        setProdsToDisplay(prods);

        // todo: move this to a service
        let cats = ["Camera", "Video Camera", "Flash"];
        setCategories(cats);
        
    }

    function filter(category) {
        let list = [];
        // find the products that matches the category
        // and add it to the list
        for(let i = 0 ; i < products.length; i++){
            let prod = products[i];
            if(prod.category === category) {
                list.push(prod);
            }
        }

        setProdsToDisplay(list)
    }

    function clearFilter() {
        setProdsToDisplay(products);
    }


    return(
        <div className="catalog">
            <h1>Check our amazing products</h1>
            <h5>We have {products.length} products ready for you!</h5>
            <button className="btn btn-danger btn-filter" onClick={clearFilter}>All</button>
            {categories.map(c => <button onClick={ () => filter(c) } key={c} className="btn btn-danger btn-filter">{c}</button>)}
            <br />

            {prodsToDisplay.map(p => <Product key={p._id} data={p}></Product>)}
        </div>
    );
}

export default Catalog;