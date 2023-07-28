import { configureStore} from "@reduxjs/toolkit";
import cartSliceReducer from './cart-slice';
import uiSLiceReducer from './ui-slice';

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        ui: uiSLiceReducer
    }
});

export default store;

