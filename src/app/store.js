import { configureStore } from "@reduxjs/toolkit";
import { crytpoApi } from "../services/cryptoApi";
import {cryptoNewsApi} from '../services/cryptoNewsApi'
export default configureStore({
    reducer: {
        [crytpoApi.reducerPath]:crytpoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    },
})