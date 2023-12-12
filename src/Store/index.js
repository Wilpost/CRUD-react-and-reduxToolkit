import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import userSlice from "./userSlice";

const configDataPersist = {
	key: "__redux_state__",
	storage,
	whitelist: ["dataState"],
};

const storeReducer = combineReducers({
	dataState: userSlice,
});

const dataPersistWithState = persistReducer(configDataPersist, storeReducer);

const persistenceStorageMidleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: dataPersistWithState,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const rootState = store.getState();
