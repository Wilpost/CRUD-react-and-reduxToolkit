import { Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { userStoreControl } from "../Hooks/useStoreControl";

export function AddUserList() {
	const [error, setError] = useState(null);
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
			setError("ko");
			return toast.error("Completa los campos");
		}

		setError("ok");
		form.reset();
		dispatch(addNewUser({ name, email, github }));
	};

	return (
		<>
			<Card className="text-center w-[350px]">
				<Title className="mb-5">Add new user</Title>
				<form onSubmit={handleSubmit}>
					<TextInput className="mb-5" placeholder="Name" name="name" />
					<TextInput className="mb-5" placeholder="Email" name="email" />
					<TextInput className="mb-5" placeholder="Github" name="github" />
					<Button className="w-full" type="submit">
						Add
					</Button>
				</form>
			</Card>
		</>
	);
}
