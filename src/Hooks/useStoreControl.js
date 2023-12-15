import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../Hooks/store";
import { addUserList, deleteUser } from "../Store/userSlice";

export function userStoreControl() {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	const addNewUser = (item) => {
		dispatch(addUserList(item));
	};

	const removeUser = (item) => {
		toast.success(`Se ha eliminado a ${item.name}`);
		dispatch(deleteUser(item));
	};

	return { users, removeUser, addNewUser };
}
