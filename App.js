import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import Goalinput from "./components/Goalinput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    console.log("enteredGoal = ", enteredGoal);
    if (!enteredGoal) return;
    enteredGoal.text = enteredGoal.text.trim();
    setCourseGoals((prev) => {
      return [enteredGoal, ...prev];
    });
  };

  const deleteGoalHandler = (delGoal) => {
    setCourseGoals((prev) => {
      return prev.filter((goal) => {
        return goal.id !== delGoal.id;
      });
    });
  };

  return (
    <View style={styles.appContainer}>
      <Goalinput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            console.log("itemData = ", itemData);
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
