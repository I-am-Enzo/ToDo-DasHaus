// components/TaskItem.tsx
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/theme";

interface TaskItemProps {
  task: string;
  index: number;
  onDelete: (index: number) => void;
}

export default function TaskItem({ task, index, onDelete }: TaskItemProps) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task}</Text>
      <TouchableOpacity onPress={() => onDelete(index)}>
        <Feather name="trash-2" size={20} color={colors.secondary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
});
