import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useMemo, useState } from "react";
import { ThemedView } from "../Atoms/ThemedView";
import { ThemedText } from "../Atoms/ThemedText";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";

export default function SubsForm({ title }: any) {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [text, setText] = useState("");

  const handleInputChange = (inputText: string) => {
    setText(inputText);
  };

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "UPI",
        value: "UPI",
        labelStyle: { margin: 15, color: "#fff" },
        borderColor: "#fff",
      },
      {
        id: "2",
        label: "Cards (Debit or Credit)",
        value: "Cards",
        labelStyle: { margin: 15, color: "#fff" },
        borderColor: "#fff",
      },
      {
        id: "3",
        label: "Digital Wallet",
        value: "DigitalWallet",
        labelStyle: { margin: 15, color: "#fff" },
        borderColor: "#fff",
      },
      {
        id: "4",
        label: "Net Banking",
        value: "NetBanking",
        labelStyle: { margin: 15, color: "#fff" },
        borderColor: "#fff",
      },
    ],
    []
  );

  console.log(selectedId);
  return (
    <ThemedView
      style={{
        width: "100%",
        padding: 20,
      }}
    >
      <ThemedText
        style={{
          justifyContent: "flex-start",
          fontSize: 20,
          fontWeight: 600,
          paddingBottom: 20,
        }}
      >
        {title}
      </ThemedText>
      <ThemedView style={styles.form}>
        <ThemedText style={styles.inputHeading}>AMOUNT</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={text}
          placeholder="Enter text here"
          keyboardType="number-pad"
        />

        {/* <ThemedText style={styles.inputHeading}>NEXT PAYMENT</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={text}
          placeholder="Enter text here"
        /> */}

        <ThemedText style={styles.inputHeading}>DUE DATE</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={text}
          placeholder="Enter text here"
        />

        <ThemedText style={styles.inputHeading}>Billing Cycle</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={text}
          placeholder="Enter text here"
        />
        <ThemedText style={styles.inputHeading}>Payment Method</ThemedText>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          layout="row"
          labelStyle={{ color: "#FFF" }}
          containerStyle={{ flexWrap: "wrap" }}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
