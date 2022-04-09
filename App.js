import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import AddToDoItem from "./components/AddToDoItem";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";

export default function App() {
  const [todos, setToDos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "go shopping", key: "3" },
    { text: "go home", key: "4" }
  ]);

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setToDos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddToDoItem submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <ToDoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
