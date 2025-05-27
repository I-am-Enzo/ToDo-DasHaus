import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTasks = async (tasks: string[]) => {
  await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
};

export const loadTasks = async () => {
  const storedTasks = await AsyncStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};
