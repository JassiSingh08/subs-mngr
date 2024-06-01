import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "../Atoms/ThemedView";
import { ThemedText } from "../Atoms/ThemedText";

export default function RecentSubscriptions() {
  return (
    <ThemedView style={{ width: "100%" }}>
      <ThemedText type="subtitle">Recent Subscriptions</ThemedText>
      <ThemedView style={styles.subContainer}>
        <ThemedView style={styles.rows} lightColor="#fff" darkColor="#000">
          <ThemedView style={styles.Name} lightColor="#fff" darkColor="#000">
            <ThemedText>icon</ThemedText>
            <ThemedView>
              <ThemedText type="defaultSemiBold">SUBS NAME</ThemedText>
              <ThemedText type="default">Date & Time</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.Amount} lightColor="#fff" darkColor="#000">
            <ThemedText type="defaultSemiBold">$3 </ThemedText>
            <ThemedText type="defaultSemiBold">/ month</ThemedText>
          </ThemedView>
        </ThemedView>
        {/*  */}
        <ThemedView style={styles.rows} lightColor="#fff" darkColor="#000">
          <ThemedView style={styles.Name} lightColor="#fff" darkColor="#000">
            <ThemedText>icon</ThemedText>
            <ThemedView>
              <ThemedText type="defaultSemiBold">SUBS NAME</ThemedText>
              <ThemedText type="default">Date & Time</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.Amount} lightColor="#fff" darkColor="#000">
            <ThemedText type="defaultSemiBold">$3 </ThemedText>
            <ThemedText type="defaultSemiBold">/ month</ThemedText>
          </ThemedView>
        </ThemedView>
        {/*  */}
        <ThemedView style={styles.rows} lightColor="#fff" darkColor="#000">
          <ThemedView style={styles.Name} lightColor="#fff" darkColor="#000">
            <ThemedText>icon</ThemedText>
            <ThemedView>
              <ThemedText type="defaultSemiBold">SUBS NAME</ThemedText>
              <ThemedText type="default">Date & Time</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.Amount} lightColor="#fff" darkColor="#000">
            <ThemedText type="defaultSemiBold">$3 </ThemedText>
            <ThemedText type="defaultSemiBold">/ month</ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.rows} lightColor="#fff" darkColor="#000">
          <ThemedView style={styles.Name} lightColor="#fff" darkColor="#000">
            <ThemedText>icon</ThemedText>
            <ThemedView>
              <ThemedText type="defaultSemiBold">SUBS NAME</ThemedText>
              <ThemedText type="default">Date & Time</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.Amount} lightColor="#fff" darkColor="#000">
            <ThemedText type="defaultSemiBold">$3 </ThemedText>
            <ThemedText type="defaultSemiBold">/ month</ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.rows} lightColor="#fff" darkColor="#000">
          <ThemedView style={styles.Name} lightColor="#fff" darkColor="#000">
            <ThemedText>icon</ThemedText>
            <ThemedView>
              <ThemedText type="defaultSemiBold">SUBS NAME</ThemedText>
              <ThemedText type="default">Date & Time</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.Amount} lightColor="#fff" darkColor="#000">
            <ThemedText type="defaultSemiBold">$3 </ThemedText>
            <ThemedText type="defaultSemiBold">/ month</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    marginTop: 20,
    marginBottom: 55,
  },
  rows: {
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderRadius: 15,
    marginBottom: 10,
  },
  Name: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  Amount: {
    flexDirection: "row",
  },
});
