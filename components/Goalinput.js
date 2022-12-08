import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";
import uuid from "react-native-uuid";

const Goalinput = ({ addGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText({ text: enteredText, id: uuid.v4() });
  };

  const addGoalHandler = () => {
    addGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your goal'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText.text}
      />
      <Button title='Add goal' onPress={addGoalHandler} />
    </View>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "yellow",
  },
});
