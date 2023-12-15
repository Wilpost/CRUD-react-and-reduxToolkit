import { Button, TableCell, TableRow } from "@tremor/react";
import { userStoreControl } from "../Hooks/useStoreControl";
import { DeleteIcon, EditUserInfo } from "./Icons";

export function UsersTable() {
	const { removeUser, users } = userStoreControl();

	return users.map((item) => {
		return (
			<TableRow key={item.id}>
				<TableCell className="flex items-center gap-3">
					{item.id}
					<img
						className="w-10 h-10 rounded-full"
						src={`https://unavatar.io/github/${item.github}`}
						alt="User profile to github"
					/>
					{item.name}
				</TableCell>
				<TableCell>{item.email}</TableCell>
				<TableCell>
					<Button>
						<EditUserInfo />
					</Button>
				</TableCell>
				<TableCell>
					<Button onClick={() => removeUser(item)}>
						<DeleteIcon />
					</Button>
				</TableCell>
			</TableRow>
		);
	});
}
