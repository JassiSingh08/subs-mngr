import React, { useMemo, useRef, useState } from "react";
import { ThemedText } from "@/components/Atoms/ThemedText";
import { ThemedView } from "@/components/Atoms/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/Molecules/Searchbar";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BottomSheets from "@/components/Organisms/BottomSheets";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import SubsForm from "@/components/Molecules/SubsForm";

export default function addSubs() {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const data = [
    {
      title: "Netflix",
      icon: "Icon",
    },
    {
      title: "Amazon Prime Video",
      icon: "Icon",
    },
    {
      title: "Disney+",
      icon: "Icon",
    },
    {
      title: "Hulu",
      icon: "Icon",
    },
    {
      title: "HBO Max",
      icon: "Icon",
    },
    {
      title: "Apple TV+",
      icon: "Icon",
    },
    {
      title: "YouTube Premium",
      icon: "Icon",
    },
    {
      title: "Peacock",
      icon: "Icon",
    },
    {
      title: "Paramount+",
      icon: "Icon",
    },
    {
      title: "Crunchyroll",
      icon: "Icon",
    },
    {
      title: "Netflix",
      icon: "Icon",
    },
    {
      title: "Amazon Prime Video",
      icon: "Icon",
    },
    {
      title: "Disney+",
      icon: "Icon",
    },
    {
      title: "Hulu",
      icon: "Icon",
    },
    {
      title: "HBO Max",
      icon: "Icon",
    },
    {
      title: "Apple TV+",
      icon: "Icon",
    },
    {
      title: "YouTube Premium",
      icon: "Icon",
    },
    {
      title: "Peacock",
      icon: "Icon",
    },
    {
      title: "Paramount+",
      icon: "Icon",
    },
    {
      title: "Crunchyroll",
      icon: "Icon",
    },
    {
      title: "Netflix",
      icon: "Icon",
    },
    {
      title: "Amazon Prime Video",
      icon: "Icon",
    },
    {
      title: "Disney+",
      icon: "Icon",
    },
    {
      title: "Hulu",
      icon: "Icon",
    },
    {
      title: "HBO Max",
      icon: "Icon",
    },
    {
      title: "Apple TV+",
      icon: "Icon",
    },
    {
      title: "YouTube Premium",
      icon: "Icon",
    },
    {
      title: "Peacock",
      icon: "Icon",
    },
    {
      title: "Paramount+",
      icon: "Icon",
    },
    {
      title: "Crunchyroll",
      icon: "Icon",
    },
    {
      title: "Netflix",
      icon: "Icon",
    },
    {
      title: "Amazon Prime Video",
      icon: "Icon",
    },
    {
      title: "Disney+",
      icon: "Icon",
    },
    {
      title: "Hulu",
      icon: "Icon",
    },
    {
      title: "HBO Max",
      icon: "Icon",
    },
    {
      title: "Apple TV+",
      icon: "Icon",
    },
    {
      title: "YouTube Premium",
      icon: "Icon",
    },
    {
      title: "Peacock",
      icon: "Icon",
    },
    {
      title: "Paramount+",
      icon: "Icon",
    },
    {
      title: "Crunchyroll",
      icon: "Icon",
    },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <ThemedView style={styles.rows} lightColor="#fff" darkColor="#000">
          <ThemedView style={styles.Name} lightColor="#fff" darkColor="#000">
            <ThemedText>{item.icon}</ThemedText>
            <ThemedView>
              <ThemedText type="subtitle">{item.title}</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView lightColor="#fff" darkColor="#000">
            <AntDesign name="right" size={24} color="white" />
          </ThemedView>
        </ThemedView>
      </TouchableOpacity>
    </>
  );

  const handlePress = (item: any) => {
    setSelectedItem(item);
    bottomSheetRef.current?.snapToIndex(0);
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <SearchBar
          clicked={clicked}
          setClicked={setClicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
        <BottomSheets
          bottomSheetViewStyle={styles.bottomSheet}
          ref={bottomSheetRef}
        >
          {selectedItem && (
            <>
              <SubsForm title={selectedItem.title} />
            </>
          )}
        </BottomSheets>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151718",
    paddingHorizontal: 15,
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
  bottomSheet: {
    height: "100%",
    backgroundColor: "black",
    paddingTop: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#fff",
    borderRadius: 12,
  },
  inputHeading: {
    paddingBottom: 10,
    fontSize: 14,
  },
  form: {
    paddingHorizontal: 15,
  },
});
