import { Toaster } from "sonner";
import { useModalStateControl } from "./Hooks/useStoreControl";
import { AddUserList } from "./components/AddUserList";
import { EditUserModal } from "./components/EditUserModal";
import { UserBoardList } from "./components/UserBoardList";
import "./index.css";

function App() {
	const { modalState } = useModalStateControl();
	const { viewModal } = modalState;

	return (
		<main className="w-full h-screen flex items-center p-4 justify-between items-center gap-4">
			<AddUserList />
			<UserBoardList />
			<Toaster richColors />

			{viewModal ? <EditUserModal /> : null}
		</main>
	);
}

export default App;
