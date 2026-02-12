import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleWare } from "./middleware";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        users: userReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(loggerMiddleWare);
    }
});
