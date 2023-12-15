import { toast } from "sonner";
import { rollbackUser } from "../Store/userSlice";

export function fecthToDataBase({ idUserDeleted, previusState, store }) {
	fetch(`https://jsonplaceholder.typicode.om/users/${idUserDeleted.id}`, {
		method: "DELETE",
	})
		.then((res) => {
			if (res.ok) {
				toast.success("User deleted from to list");
			}
		})
		.catch((err) => {
			console.log("Ha ocurrido un error:", err);
			toast.error(
				`Ocurrio un error al eliminar el usuario: ${idUserDeleted.id}`,
			);
			store.dispatch(rollbackUser(previusState));
		});
}
