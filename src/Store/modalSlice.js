import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	viewModal: false,
	userEdit: {},
};

export const modalSlice = createSlice({
	name: "modalSlice",
	initialState,
	reducers: {
		viewModal: (state, action) => {
			return { ...state, viewModal: action.payload };
		},
		closeModal: (state, action) => {
			return { ...state, viewModal: action.payload };
		},
		addUserEdit: (state, action) => {
			return { ...state, userEdit: action.payload };
		},
	},
});

export default modalSlice.reducer;
export const { viewModal, closeModal, addUserEdit } = modalSlice.actions;
