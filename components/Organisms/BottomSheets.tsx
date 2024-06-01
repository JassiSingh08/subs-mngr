import React, {
  PropsWithChildren,
  ReactElement,
  useMemo,
  forwardRef,
} from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ThemedView } from "../Atoms/ThemedView";
import { StyleSheet, View } from "react-native";

type BottomSheetProps = PropsWithChildren<{
  children: any;
  bottomSheetViewStyle?: any;
}>;

const BottomSheets = forwardRef<BottomSheet, BottomSheetProps>(
  ({ children, bottomSheetViewStyle }, ref) => {
    const snapPoints = useMemo(() => ["90%"], []);

    return (
      <BottomSheet
        index={-1}
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        handleStyle={{
          backgroundColor: "#000",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <ThemedView style={[styles.themedView, bottomSheetViewStyle]}>
              {children}
            </ThemedView>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  themedView: {
    flex: 1,
  },
});

export default BottomSheets;
