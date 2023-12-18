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
import { userStoreControl } from "../Hooks/useStoreControl";
import { UsersTable } from "./usersTable";
export function UserBoardList() {
	const { users } = userStoreControl();

	return (
		<Card>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="flex items-center gap-2">
							<Title>Users</Title>
							<Badge>{users.length}</Badge>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Table className="overflow-x-hidden">
				<TableBody>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Username</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Status</TableHeaderCell>
					</TableRow>
				</TableBody>
				<TableBody>
					{users.length > 0 ? (
						<UsersTable />
					) : (
						<div className="w-[400px] text-end">
							<Title>There are no users yet</Title>
						</div>
					)}
				</TableBody>
			</Table>
		</Card>
	);
}
