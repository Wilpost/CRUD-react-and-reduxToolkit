import {
	Badge,
	Button,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

import { userStoreControl } from "../Hooks/useStoreControl";
import { DeleteIcon, EditUserInfo } from "./Icons";
export function UserBoardList() {
	const { removeUser, users } = userStoreControl();

	return (
		<Card className="h-[567px] w-[736px] overflow-auto">
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="flex items-center gap-2">
							<Title>Usuarios</Title>
							<Badge>{users.length}</Badge>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Table className="mt-5">
				<TableBody>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Status</TableHeaderCell>
					</TableRow>
				</TableBody>
				<TableBody>
					{users.map((item) => (
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
								<Button onClick={() => removeUser(item.id)}>
									<DeleteIcon />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
