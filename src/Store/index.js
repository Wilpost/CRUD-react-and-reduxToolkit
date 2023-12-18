import { configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { fecthToDataBase } from "../Services/fetchApi";
import modalSlice from "./modalSlice";
import userSlice, { rollbackState } from "./userSlice";

// No agregar usuario si ya existe

// Middlewares
const persistenceStorageMidleware = (store) => (next) => (action) => {
	//Persisto el estado en local storage
	next(action);
	localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

const verifyAlredyUserInTheState = (store) => (next) => (action) => {
	const previusState = store.getState();

	if (action.type === "users/addUserList") {
		const userPayload = action.payload.name;

		const isAleredyUserDefined = previusState.users.some(
			(item) => item.name === userPayload,
		);

		if (isAleredyUserDefined) {
			toast.warning("This user already exists");
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
		modal: modalSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			verifyAlredyUserInTheState,
			persistenceStorageMidleware,
			sincWihtBaseData,
		),
});
