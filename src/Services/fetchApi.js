import { toast } from "sonner";
import { rollbackUser } from "../Store/userSlice";

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
			console.log("Ha ocurrido un error:", err);
			toast.error(
				`An error occurred while deleting the user: ${idUserDeleted.id}`,
			);
			store.dispatch(rollbackUser(previusState));
		});
}
