import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "../Redux/CartSlice";
const appStore = configureStore(
    {
        reducer:{
            cart:CartSlice,
            // user:userReducer
        }
    }
);

export default appStore;