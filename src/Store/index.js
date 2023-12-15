import { configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { fecthToDataBase } from "../Services/fetchApi";
import userSlice, { rollbackState } from "./userSlice";

// No agregar usuario si ya existe

// Middlewares
const persistenceStorageMidleware = (store) => (next) => (action) => {
	//Persisto el estado en local storage
	next(action);
	localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

const verifyAlredyUserInTheState = (store) => (next) => (action) => {
	const { type, payload } = action;
	const previusState = store.getState();

	if (type === "users/addUserList") {
		const userPayload = payload.name;
		const isAleredyUserDefined = previusState.users.some(
			(item) => item.name === userPayload,
		);

		if (isAleredyUserDefined) {
			toast.warning("Este usuario ya existe");
			return store.dispatch(rollbackState(previusState.users));
		}
	}

	next(action);
};

const sincWihtBaseData = (store) => (next) => (action) => {
	const { type, payload } = action;
	const previusState = store.getState();

	next(action);

	if (type === "users/deleteUser") {
		const idUserDeleted = payload;
		fecthToDataBase({ idUserDeleted, previusState, store });
	}
};

// Store config
export const store = configureStore({
	reducer: {
		users: userSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			verifyAlredyUserInTheState,
			persistenceStorageMidleware,
			sincWihtBaseData,
		),
});
