import { createSlice } from "@reduxjs/toolkit";

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
		github: "Joselo",
		email: "josegomez@gmail.com",
		id: 4,
	},
];

const initialState = (() => {
	const storage = localStorage.getItem("__redux_state__");
	if (storage) {
		return JSON.parse(storage.users);
	}
	return DEFAULT_STATE;
})();

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUserList: (state, action) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUser: (state, action) => {
			const id = action.payload;
			return state.filter((item) => item.id !== id);
		},
	},
});

export default userSlice.reducer;
export const { deleteUser, addUserList } = userSlice.actions;
