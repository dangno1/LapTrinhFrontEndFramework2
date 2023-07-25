import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../slices/Counter";
import { productReducer } from "../slices/Products";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;