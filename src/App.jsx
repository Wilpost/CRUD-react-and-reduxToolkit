import { Toaster } from "sonner";
import { AddUserList } from "./components/AddUserList";
import { UserBoardList } from "./components/UserBoardList";
import "./index.css";

function App() {
	return (
		<main className="flex items-center gap-4">
			<AddUserList />
			<UserBoardList />
			<Toaster richColors />
		</main>
	);
}

export default App;
