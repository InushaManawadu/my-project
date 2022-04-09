import { StyleSheet, Button, View, TextInput } from "react-native";
import { useState } from "react";

export default function AddToDoItem({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add New Todo"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
