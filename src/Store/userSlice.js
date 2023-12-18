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
		editUserData: (state, action) => {
			const userSel = state.find((item) => item.id === action.payload.id);
			const { id } = state.find((item) => item.id === action.payload.id);
			const indexUser = state.indexOf(userSel);

			state[indexUser] = { id, ...action.payload.data };
			return state;
		},
		rollbackUser: (state, action) => {
			return [...action.payload.users];
		},
		rollbackState: (state, action) => {
			return [...action.payload];
		},
		addUserList: (state, action) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUser: (state, action) => {
			const id = action.payload.id;
			return state.filter((item) => item.id !== id);
		},
	},
});

export default userSlice.reducer;
export const {
	deleteUser,
	addUserList,
	rollbackState,
	rollbackUser,
	editUserData,
} = userSlice.actions;
