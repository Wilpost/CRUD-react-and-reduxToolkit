import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const persistenceStorageMidleware = (store) => (next) => (action) => {
	console.log(store.getState());
	console.log(action);
	return (next) => next(action);
	// console.log(store.getState());
	// localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: userSlice,
	},
});

export const rootState = store.getState();
