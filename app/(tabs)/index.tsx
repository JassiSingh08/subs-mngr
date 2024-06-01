import { StyleSheet, Dimensions, View, TextInput } from "react-native";
import { ThemedText } from "@/components/Atoms/ThemedText";
import UpcomingPayments from "@/components/Organisms/UpcomingPayments";
import RecentSubscriptions from "@/components/Organisms/RecentSubscriptions";
import ParallaxScrollView from "@/components/Molecules/ParallaxScrollView";
import { ThemedView } from "@/components/Atoms/ThemedView";
import AddSubscription from "@/components/Molecules/AddSubscription";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CreditCard from "@/components/Molecules/PaymentCard";
import BottomSheets from "@/components/Organisms/BottomSheets";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";

export default function HomeScreen() {
  const { width, height } = Dimensions.get("window");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const drag = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
      // console.log(event.translationX, event.translationY);
    })
    .onEnd(() => {
      // Determine the nearest side
      const middleX = width / 2;
      const middleY = height / 2;
      const finalX = translateX.value > middleX ? width - 50 : 0;
      const finalY = translateY.value > middleY ? height - 50 : 0;

      // Animate to the nearest side
      translateX.value = withSpring(finalX);
      translateY.value = withSpring(finalY);
    });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const handleSnapPress = useCallback((index: any) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  return (
    <GestureHandlerRootView>
      <ParallaxScrollView
        HeaderName="Home"
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={<ThemedView style={styles.reactLogo} />}
        handleSnapPress={handleSnapPress}
      >
        <ThemedView style={styles.titleContainer}>
          <UpcomingPayments />
        </ThemedView>
        <ThemedView style={styles.titleContainer}>
          <RecentSubscriptions />
        </ThemedView>
      </ParallaxScrollView>
      <GestureDetector gesture={drag}>
        <Animated.View style={[styles.addNewSub, containerStyle]}>
          <AddSubscription />
        </Animated.View>
      </GestureDetector>
      <BottomSheets
        bottomSheetViewStyle={styles.bottomSheet}
        ref={bottomSheetRef}
      >
        <CreditCard name="Scanner Singh" date="25/05" suffix="9009" />
        <CreditCard
          name="Scanner Singh"
          date="25/05"
          suffix="30"
          bgColor="#aeaeae"
        />
      </BottomSheets>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  addNewSub: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 100,
    right: 20,
  },
  reactLogo: {},
  bottomSheet: {
    height: "100%",
    backgroundColor: "black",
    paddingTop: 20,
    alignItems: "center",
  },
});
