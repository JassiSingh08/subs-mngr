// SearchBar.js
import React, { PropsWithChildren } from "react";
import { StyleSheet, TextInput, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { ThemedView } from "../Atoms/ThemedView";

type Props = PropsWithChildren<{
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (value: string) => void;
  setClicked: (value: boolean) => void;
}>;

const SearchBar = ({
  clicked,
  setClicked,
  searchPhrase,
  setSearchPhrase,
}: Props) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </ThemedView>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <ThemedView>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </ThemedView>
      )}
    </ThemedView>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
