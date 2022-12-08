import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";
import uuid from "react-native-uuid";

const Goalinput = ({ addGoal, visable, endAddGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText({ text: enteredText, id: uuid.v4() });
  };

  const addGoalHandler = () => {
    addGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visable} animationType='slide'>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <TextInput
            placeholder='Your goal'
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText.text}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            title='Add goal'
            onPress={addGoalHandler}
          />
          <Button
            style={styles.btn}
            title='Cancel'
            onPress={endAddGoalHandler}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
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
  btnContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    marginRight: 100,
  },
});
