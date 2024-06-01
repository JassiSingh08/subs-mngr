import React from "react";

import { ThemedText } from "../Atoms/ThemedText";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { ThemedView } from "../Atoms/ThemedView";

export default function UpcomingPayments() {
  return (
    <ThemedView>
      <ThemedText type="subtitle">Upcoming Payments (Days)</ThemedText>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={6}
        showsHorizontalScrollIndicator={false}
      >
        <ThemedView style={styles.container}>
          <ThemedView
            style={styles.Upcoming}
            lightColor="#fff"
            darkColor="#000"
          >
            <ThemedText type="subtitle">Nexa Group</ThemedText>
            <ThemedText type="default">icon + Monthly</ThemedText>
            <ThemedText type="default">icon + Remain</ThemedText>
          </ThemedView>
          <ThemedView
            style={styles.Upcoming}
            lightColor="#fff"
            darkColor="#000"
          >
            <ThemedText type="subtitle">Nexa Group</ThemedText>
            <ThemedText type="default">icon + Monthly</ThemedText>
            <ThemedText type="default">icon + Remain</ThemedText>
          </ThemedView>
          <ThemedView
            style={styles.Upcoming}
            lightColor="#fff"
            darkColor="#000"
          >
            <ThemedText type="subtitle">Nexa Group</ThemedText>
            <ThemedText type="default">icon + Monthly</ThemedText>
            <ThemedText type="default">icon + Remain</ThemedText>
          </ThemedView>
          <ThemedView
            style={styles.Upcoming}
            lightColor="#fff"
            darkColor="#000"
          >
            <ThemedText type="subtitle">Nexa Group</ThemedText>
            <ThemedText type="default">icon + Monthly</ThemedText>
            <ThemedText type="default">icon + Remain</ThemedText>
          </ThemedView>
          <ThemedView
            style={styles.Upcoming}
            lightColor="#fff"
            darkColor="#000"
          >
            <ThemedText type="subtitle">Nexa Group</ThemedText>
            <ThemedText type="default">icon + Monthly</ThemedText>
            <ThemedText type="default">icon + Remain</ThemedText>
          </ThemedView>
        </ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  Upcoming: {
    height: 120,
    width: 150,
    padding: 10,
    borderRadius: 10,
  },
});
