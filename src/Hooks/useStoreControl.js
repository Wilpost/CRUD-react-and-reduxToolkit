import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../Hooks/store";
import { addUserEdit, closeModal, viewModal } from "../Store/modalSlice";
import { addUserList, deleteUser, editUserData } from "../Store/userSlice";

export function userStoreControl() {
	const users = useAppSelector((state) => state.users);

	const dispatch = useAppDispatch();

	const addNewUser = (item) => {
		toast.success(`It was added to ${item.name}`);
		dispatch(addUserList(item));
	};

	const editUser = (item) => {
		dispatch(editUserData(item));
	};

	const removeUser = (item) => {
		dispatch(deleteUser(item));
	};

	return { users, removeUser, addNewUser, editUser };
}

export function useModalStateControl() {
	const modalState = useAppSelector((state) => state.modal);
	const dispatch = useAppDispatch();

	const viewModalState = (val) => {
		dispatch(viewModal(val));
	};

	const addUser = (user) => {
		dispatch(addUserEdit(user));
	};

	const closeModalState = (val) => {
		dispatch(closeModal(val));
	};

	return { modalState, viewModalState, closeModalState, addUser };
}
