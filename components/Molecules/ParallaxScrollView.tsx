import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedText } from "../Atoms/ThemedText";
import { Link, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import TotalSpends from "../Organisms/TotalSpends";
import { ThemedView } from "../Atoms/ThemedView";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  HeaderName: string;
  handleSnapPress: (index: number) => void;
  // Extra: ReactElement;
  // Backbutton: boolean | ReactElement;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  HeaderName,
  handleSnapPress,
}: // Extra,
// Backbutton = true,
Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });
  // variables

  // callbacks
  // const handleSheetChange = useCallback((index: any) => {
  //   console.log("handleSheetChange", index);
  // }, []);

  // const handleClosePress = useCallback(() => {
  //   sheetRef.current?.close();
  // }, []);

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <SafeAreaView>
          <Animated.View
            style={[
              styles.header,
              { backgroundColor: headerBackgroundColor[colorScheme] },
              headerAnimatedStyle,
            ]}
          >
            {headerImage}
            <ThemedView style={styles.headerContainer}>
              <ThemedText style={styles.HeaderName}>Back</ThemedText>
              <ThemedText type="subtitle">{HeaderName}</ThemedText>
              <ThemedText style={styles.HeaderName}>EXTRA</ThemedText>
            </ThemedView>
            <ThemedView style={{ backgroundColor: "transparent", padding: 20 }}>
              <ThemedText type="subtitle">Welcome</ThemedText>
              <ThemedText
                type="defaultSemiBold"
                style={{ paddingVertical: 10 }}
              >
                Hi, Scanner
              </ThemedText>
            </ThemedView>

            <TouchableOpacity
              onPress={() => {
                handleSnapPress(0);
              }}
            >
              <ThemedView
                style={{
                  backgroundColor: "transparent",
                  paddingHorizontal: 20,
                  alignItems: "center",
                }}
              >
                <TotalSpends />
              </ThemedView>
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 260,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 25,
    gap: 16,
    overflow: "hidden",
  },
  headerContainer: {
    padding: 16,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderName: {
    fontSize: 20,
    color: "#F0F4FA",
  },
});
