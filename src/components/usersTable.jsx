import { Button, TableCell, TableRow } from "@tremor/react";
import {
	useModalStateControl,
	userStoreControl,
} from "../Hooks/useStoreControl";
import { DeleteIcon, EditUserInfo } from "./Icons";

export function UsersTable() {
	const { users, removeUser } = userStoreControl();
	const { closeModalState, addUser } = useModalStateControl();

	const handleEditUser = (item) => {
		const userSelected = users.find((user) => user.id === item.id);
		addUser(userSelected);
		closeModalState(true);
	};

	return users.map((item) => {
		return (
			<TableRow key={item.id}>
				<TableCell>{item.id.slice(0, 2)}</TableCell>
				<TableCell className="flex items-center gap-3">
					<img
						className="w-10 h-10 rounded-full"
						src={`https://unavatar.io/github/${item.github}`}
						alt="User profile to github"
					/>
					{item.name}
				</TableCell>
				<TableCell>{item.email}</TableCell>
				<TableCell className="flex gap-4 items-center">
					<Button onClick={() => handleEditUser(item)}>
						<EditUserInfo />
					</Button>
					<Button onClick={() => removeUser(item)}>
						<DeleteIcon />
					</Button>
				</TableCell>
			</TableRow>
		);
	});
}
