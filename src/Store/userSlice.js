import { createSlice } from "@reduxjs/toolkit";

const initState = [
	{
		name: "wilyer",
		github: "Wilpost",
		email: "wilyerqueiporiera@gmail.com",
	},
	{
		name: "juan",
		github: "juanLopez",
		email: "juanlopez@gmail.com",
	},
	{
		name: "carlos",
		github: "Carl",
		email: "carlosmiguel@gmail.com",
	},
	{
		name: "jose",
		github: "Joselo",
		email: "joselgomez@gmail.com",
	},
];

const userSlice = createSlice({
	name: "user",
	initState,
	reducers: {
		deleteUser: (state, action) => {
			return state.filter((item) => {
				return item === action.payload;
			});
		},
	},
});

export default userSlice.reducer;
