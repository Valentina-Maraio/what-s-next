import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BookScreen from "./BookScreen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>What's next?</Text>
      <BookScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
