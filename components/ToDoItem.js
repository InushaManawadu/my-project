import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <MaterialIcons
          name="delete"
          size={18}
          color="#333"
          onPress={() => pressHandler(item.key)}
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#333",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 20,
    flexDirection: "row"
  },
  itemText: {
    marginLeft: 10
  }
});
