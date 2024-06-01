import { StyleSheet } from "react-native";
import React from "react";

import { ThemedText } from "../Atoms/ThemedText";
import { ThemedView } from "../Atoms/ThemedView";

export default function TotalSpends() {
  return (
    <ThemedView style={styles.Container}>
      <ThemedText type="default">Total for your Subscription</ThemedText>
      <ThemedText type="title" style={styles.Amount}>
        200.80 / <ThemedText type="defaultSemiBold"> month</ThemedText>
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
  Amount: {
    marginTop: 15,
    fontSize: 25,
  },
});
