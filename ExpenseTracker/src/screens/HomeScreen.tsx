// src/screens/HomeScreen.js

import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const expenses = [
    { id: "1", category: "Food", amount: 50 },
    { id: "2", category: "Transport", amount: 20 },
    { id: "3", category: "Bills", amount: 100 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expenses</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.category}: ${item.amount}</Text>
          </View>
        )}
      />
      <Button title="Logout" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  expenseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});