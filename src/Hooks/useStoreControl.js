import { useAppDispatch, useAppSelector } from "../Hooks/store";
import { addUserList, deleteUser } from "../Store/userSlice";

export function userStoreControl() {
	const users = useAppSelector((state) => state.users.dataState);
	const dispatch = useAppDispatch();

	const addNewUser = (item) => {
		dispatch(addUserList(item));
	};

	const removeUser = (item) => {
		dispatch(deleteUser(item));
	};

	return { users, removeUser, addNewUser };
}
