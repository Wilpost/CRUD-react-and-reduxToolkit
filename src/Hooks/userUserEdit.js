import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useModalStateControl, userStoreControl } from "./useStoreControl";

export function UseEditUser() {
	const dispatch = useDispatch();

	const inputRefName = useRef();
	const inputRefEmail = useRef();
	const inputRefGithub = useRef();

	const { editUser } = userStoreControl();
	const { modalState, closeModalState } = useModalStateControl();
	const { userEdit: item } = modalState;

	function cancelEdit() {
		closeModalState(false);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const name = formData.get("name");
		const email = formData.get("email");
		const github = formData.get("github");
		const objectUserData = {
			name: inputRefName.current.placeholder,
			email: inputRefEmail.current.placeholder,
			github: inputRefGithub.current.placeholder,
		};

		if (email !== "") {
			objectUserData.email = email;
		}
		if (name !== "") {
			objectUserData.name = name;
		}

		if (github !== "") {
			objectUserData.github = github;
		}

		toast.success("It has been edited correctly!");
		closeModalState(false);
		dispatch(editUser({ id: item.id, data: objectUserData }));
	}

	return {
		handleSubmit,
		inputRefEmail,
		inputRefGithub,
		inputRefName,
		item,
		cancelEdit,
	};
}
