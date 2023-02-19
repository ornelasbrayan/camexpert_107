import DataContext from "./dataContext";
import { useState } from 'react';

function GlobalData(props){
    
    const [cart, setCart] = useState([]);
    const [fakeUser, setFakeUser] = useState({name: "Brayan"});

    // functions
    function addProductsToCart(){
        console.log("Gloabal is called");
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