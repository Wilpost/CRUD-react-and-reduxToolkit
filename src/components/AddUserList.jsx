import { Button, Card, TextInput, Title } from "@tremor/react";
import { useAddUser } from "../Hooks/useAddUser";

export function AddUserList() {
	const { handleSubmit } = useAddUser();

	return (
		<>
			<Card className="text-center bg-tremor-background-muted w-[350px]">
				<Title className="mb-5">Add new user</Title>
				<form onSubmit={handleSubmit}>
					<TextInput className="mb-5" placeholder="Name" name="name" />
					<TextInput className="mb-5" placeholder="Email" name="email" />
					<TextInput className="mb-5" placeholder="Github" name="github" />
					<Button className="w-full h-full" type="submit">
						Add
					</Button>
				</form>
			</Card>
		</>
	);
}
