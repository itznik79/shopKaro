import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";


// creating the context api
export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = 'Rs.';
    const delivery_fee = 10;
    
    const value = {
        products
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;