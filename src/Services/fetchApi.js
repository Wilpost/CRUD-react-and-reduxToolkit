import { toast } from "sonner";
import { rollbackUser } from "../Store/userSlice";

// Simulation of an optimistic UI, when an error occurs the state is rolled back
export function fecthToDataBase({ idUserDeleted, previusState, store }) {
	fetch(`https://jsonplaceholder.typicode.com/users/${idUserDeleted.id}`, {
		method: "DELETE",
	})
		.then((res) => {
			if (res.ok) {
				toast.success("User Deleted");
			}
		})
		.catch((err) => {
			console.log("An error has occurred:", err);
			toast.error(
				`An error occurred while deleting the user: ${idUserDeleted.id}`,
			);
			store.dispatch(rollbackUser(previusState));
		});
}
