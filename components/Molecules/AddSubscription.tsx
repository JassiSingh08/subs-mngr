import { StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { Link } from "expo-router";

export default function AddSubscription() {
  return (
    <Link href="/addSubs">
      <Animated.View style={[styles.container]}>
        <Entypo name="add-to-list" size={24} color="white" />
      </Animated.View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "#1D3D47",
  },
});
