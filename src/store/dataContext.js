// interface

import { createContext } from "react";

//  Interface, promise, blueprints
// should not have any values or implementations
// just describe the structure of the data

const DataContext = createContext({
    cart: [],
    user: {},
    // functions
    addProductsToCart: () => {},
    remoProductsFromCart: () => {},
})

export default DataContext;