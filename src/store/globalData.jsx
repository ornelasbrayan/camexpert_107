import DataContext from "./dataContext";
import { useState } from 'react';

function GlobalData(props){
    
    const [cart, setCart] = useState([]);
    const [fakeUser, setFakeUser] = useState({name: "Brayan"});

    // functions
    function addProductsToCart(product){
        console.log("Gloabal is called");
        // to modify an state variable with objects {} or arrays []
        // we have to create a copy, modify the copy, set the copy
        let copy = [...cart];
        copy.push(product);
        setCart(copy);
    }

    function remoProductsFromCart(){

    }

    return(
        <div>
            <DataContext.Provider value = {{
                cart: cart,  
                user: fakeUser,
                addProductsToCart: addProductsToCart,
                remoProductsFromCart: remoProductsFromCart
            }}
              
            >
                
                {props.children}
            </DataContext.Provider>
        </div>
    );
}

export default GlobalData;