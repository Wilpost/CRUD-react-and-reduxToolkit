import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

import { toast } from "sonner";
import { userStoreControl } from "../Hooks/useStoreControl";
import { UsersTable } from "./usersTable";
export function UserBoardList() {
	const { removeUser, users } = userStoreControl();

	const handleRemoveUser = (id, name) => {
		toast.warning(`Se ha eliminado a ${name}`);

		removeUser(id);
	};

	return (
		<Card className="h-[567px] max-w-[778px] flex flex-col w-full overflow-auto overflow-x-auto [&::-webkit-scrollbar-thumb]:bg-mainLightBlue [&::-webkit-scrollbar-button]:appearance-none [&::-webkit-scrollbar-button]:bg-mainLightBlue [&::-webkit-scrollbar-thumb]:appearance-none [&::-webkit-scrollbar-track]:bg-mainLightBlue">
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
			<Table>
				<TableBody>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Status</TableHeaderCell>
					</TableRow>
				</TableBody>
				<TableBody>
					{users.length > 0 ? (
						<UsersTable users={users} handleRemoveUser={handleRemoveUser} />
					) : (
						<div className="w-full flex justify-center">
							<Title>No hay usuarios aún</Title>
						</div>
					)}
				</TableBody>
			</Table>
		</Card>
	);
}
