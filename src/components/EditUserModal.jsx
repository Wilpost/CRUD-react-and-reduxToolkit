import {
	Button,
	Card,
	Table,
	TableBody,
	TableCell,
	TableRow,
	TextInput,
	Title,
} from "@tremor/react";
import { UseEditUser } from "../Hooks/userUserEdit";

export function EditUserModal() {
	const {
		handleSubmit,
		inputRefEmail,
		inputRefGithub,
		inputRefName,
		item,
		cancelEdit,
	} = UseEditUser();

	return (
		<div className="w-full top-0 right-0 bg-[#00000040] backdrop-blur-sm z-[222] h-screen absolute grid place-content-center">
			<Card className="text-center z-[33333] w-[350px]">
				<Title className="mb-5">Edit user</Title>
				<form onSubmit={handleSubmit}>
					<TextInput
						className="mb-5"
						name="name"
						ref={inputRefName}
						placeholder={item.name}
					/>
					<TextInput
						className="mb-5"
						name="email"
						ref={inputRefEmail}
						placeholder={item.email}
					/>
					<TextInput
						className="mb-5"
						name="github"
						ref={inputRefGithub}
						placeholder={item.github}
					/>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>
									<Button variant="secondary" className="w-full" type="submit">
										Edit
									</Button>
								</TableCell>

								<TableCell>
									<Button onClick={() => cancelEdit()} className="w-full">
										Cancel
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</form>
			</Card>
		</div>
	);
}
