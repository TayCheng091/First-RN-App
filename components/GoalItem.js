import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ curGoal, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={() => deleteGoalHandler(curGoal)}
      >
        <Text style={styles.goalText}>{curGoal.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});
