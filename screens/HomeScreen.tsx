import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskItem from "../components/TaskItem";
import { colors } from "../constants/theme";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const storedTasks = await AsyncStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  };

  const addTask = async () => {
    if (task.trim() === "") return;
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    setTask("");
    await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const removeTask = async (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas do Dia</Text>

      <TextInput
        style={styles.input}
        placeholder="Nova tarefa..."
        placeholderTextColor={colors.placeholder}
        value={task}
        onChangeText={setTask}
      />

      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem task={item} index={index} onDelete={removeTask} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
