import { Button, TableCell, TableRow } from "@tremor/react";
import { DeleteIcon, EditUserInfo } from "./Icons";

export function UsersTable({ users = [], handleRemoveUser }) {
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
					<Button onClick={() => handleRemoveUser(item.id, item.name)}>
						<DeleteIcon />
					</Button>
				</TableCell>
			</TableRow>
		);
	});
}
