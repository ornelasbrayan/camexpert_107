import "./catalog.css";
import Product from '../components/product';
import { useState } from 'react';
import { useEffect } from 'react';
import DataService from './../services/dataService';

function Catalog(){

    const [products, setProducts] = useState([]);

    // when the component loads, do something
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    },[]);
    
    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }

    function magicTest() {
        console.log("Hello!");
        setProducts([]); //clears the array
    }

    return(
        <div className="catalog">
            <h1>Check our amazing products</h1>
            <h5>We have {products.length} products ready for you!</h5>
            {products.map(p => <Product data={p}></Product>)}
        </div>
    );
}

export default Catalog;