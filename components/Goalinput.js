import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/Images/goal.png")}
        />
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
            color={styles.btn.color}
            title='Add goal'
            onPress={addGoalHandler}
          />
          <Button
            color={styles.cancelBtn.color}
            title='Cancel'
            onPress={endAddGoalHandler}
          />
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
    padding: 16,
    backgroundColor: "#A5D8FF",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: "#aaa",
    borderRadius: 8,
    backgroundColor: "yellow",
  },
  btnContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    color: "#3943B7",
  },
  cancelBtn: {
    color: "#D74E09",
  },
});
