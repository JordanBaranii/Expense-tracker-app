// src/screens/ExpenseTrackerScreen.js

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ExpenseTrackerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});