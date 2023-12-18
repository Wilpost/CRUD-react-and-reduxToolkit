import { useState } from "react";

export function userUserData() {
	const [stateUserEdit, setStateUserEdit] = useState(false);
	const [userData, setUserData] = useState({});

	return { stateUserEdit, setStateUserEdit, userData, setUserData };
}
