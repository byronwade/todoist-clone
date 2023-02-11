import { useEffect, useState } from "react";
import { firebase } from "../firebase";

const collectedTasksExist = () => {};

export const useTasks = (selectedProject: string | number) => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		let unsubscribe = firebase
			.firestore()
			.collections("tasks")
			.where("userId", "==", "23pfoimp34");

		unsubscribe =
			selectedProject && !collectedTasksExist(selectedProject)
				? unsubscribe -
				  unsubscribe.where("projectId", "==", selectedProject)
				: selectedProject === "TODAY"
				? (unsubscribe = unsubscribe.where(
						"date",
						"==",
						moment().format("DD/MM/YY")
				  ))
				: selectedProject === "INBOX" || selectedProject === 0
				? (unsubscribe = unsubscribe.where("date", "==", ""))
				: unsubscribe;
	}, []);
};
