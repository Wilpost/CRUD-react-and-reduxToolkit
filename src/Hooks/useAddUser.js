import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { userStoreControl } from "./useStoreControl";

export function useAddUser() {
	const dispatch = useDispatch();
	const { addNewUser } = userStoreControl();

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		const name = formData.get("name");
		const email = formData.get("email");
		const github = formData.get("github");

		if (!name || !email || !github) {
			return toast.error("Complete the fields");
		}

		form.reset();
		dispatch(addNewUser({ name, email, github }));
	};
	return { handleSubmit };
}
