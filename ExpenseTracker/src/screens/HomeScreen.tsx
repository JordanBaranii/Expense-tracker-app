import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Expense Tracker!</Text>
      <Button title="Go to Tracker" onPress={() => navigation.navigate("ExpenseTracker")} />
    </View>
  );
};

export default HomeScreen;
