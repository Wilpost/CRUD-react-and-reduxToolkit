import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const DEFAULT_STATE = [
	{
		name: "wilyer",
		github: "Wilpost",
		email: "wilyerqueiporiera@gmail.com",
		id: 1,
	},
	{
		name: "juan",
		github: "juanLopez",
		email: "juanlopez@gmail.com",
		id: 2,
	},
	{
		name: "carlos",
		github: "Carl",
		email: "carlosmiguel@gmail.com",
		id: 3,
	},
	{
		name: "jose",
		github: "Jose",
		email: "josegomez@gmail.com",
		id: 4,
	},
];

const initialState = (() => {
	const storage = localStorage.getItem("__redux_state__");
	if (storage) {
		return JSON.parse(storage).users;
	}
	return DEFAULT_STATE;
})();

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		rollbackUser: (state, action) => {
			return [...action.payload.users];
		},
		rollbackState: (state, action) => {
			return [...action.payload];
		},
		addUserList: (state, action) => {
			const id = crypto.randomUUID();
			toast.success(`Se agrego a ${action.payload.name}`);
			return [...state, { id, ...action.payload }];
		},
		deleteUser: (state, action) => {
			const id = action.payload.id;
			return state.filter((item) => item.id !== id);
		},
	},
});

export default userSlice.reducer;
export const { deleteUser, addUserList, rollbackState, rollbackUser } =
	userSlice.actions;
