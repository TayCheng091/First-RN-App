import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import Goalinput from "./components/Goalinput";

export default function App() {
  console.log("App is starting !!!!");

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = (enteredGoal) => {
    if (!enteredGoal) return;
    enteredGoal.text = enteredGoal.text.trim();
    setCourseGoals((prev) => {
      return [enteredGoal, ...prev];
    });
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (delGoal) => {
    setCourseGoals((prev) => {
      return prev.filter((goal) => {
        return goal.id !== delGoal.id;
      });
    });
  };

  const setModalVisible = () => {
    setModalIsVisible(true);
  };

  const setModalInvisible = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <View>
          <Button title='Add goal now !' onPress={setModalVisible}></Button>
        </View>
        <Goalinput
          addGoal={addGoalHandler}
          endAddGoalHandler={setModalInvisible}
          visable={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  curGoal={itemData.item}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
