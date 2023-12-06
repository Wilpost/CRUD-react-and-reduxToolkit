import {
	Button,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";
import { useSelector } from "react-redux";
import { DeleteIcon, EditUserInfo } from "./Icons";

// const data = [
// 	{
// 		name: "Viola Amherd",
// 		Role: "Federal Councillor",
// 		departement:
// 			"The Federal Department of Defence, Civil Protection and Sport (DDPS)",
// 		status: "active",
// 	},
// 	{
// 		name: "Simonetta Sommaruga",
// 		Role: "Federal Councillor",
// 		departement:
// 			"The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
// 		status: "active",
// 	},
// 	{
// 		name: "Alain Berset",
// 		Role: "Federal Councillor",
// 		departement: "The Federal Department of Home Affairs (FDHA)",
// 		status: "active",
// 	},
// 	{
// 		name: "Ignazio Cassis",
// 		Role: "Federal Councillor",
// 		departement: "The Federal Department of Foreign Affairs (FDFA)",
// 		status: "active",
// 	},
// 	{
// 		name: "Karin Keller-Sutter",
// 		Role: "Federal Councillor",
// 		departement: "The Federal Department of Finance (FDF)",
// 		status: "active",
// 	},
// 	{
// 		name: "Guy Parmelin",
// 		Role: "Federal Councillor",
// 		departement:
// 			"The Federal Department of Economic Affairs, Education and Research (EAER)",
// 		status: "active",
// 	},
// 	{
// 		name: "Elisabeth Baume-Schneider",
// 		Role: "Federal Councillor",
// 		departement: "The Federal Department of Justice and Police (FDJP)",
// 		status: "active",
// 	},
// ];

export function UserBoardList() {
	const users = useSelector((state) => {
		state.users;
	});

	return (
		<Card className="h-[567px] overflow-auto">
			<Title>List of Swiss Federal Councillours</Title>
			<Table className="mt-5">
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Status</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							{/* <TableCell>
							</TableCell> */}
							<TableCell className="flex items-center gap-3">
								<img
									className="w-10 h-10 rounded-full"
									src="https://unavatar.io/github/wilpost"
									alt="User profile to github"
								/>
								{item.name}
							</TableCell>
							<TableCell>wilyerqueiporiera@gmail.com</TableCell>
							<TableCell>
								<Button>
									<EditUserInfo />
								</Button>
							</TableCell>
							<TableCell>
								<Button>
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
