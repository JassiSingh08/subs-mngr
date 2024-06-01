import { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import { ThemedText } from "../Atoms/ThemedText";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { dateFormatter } from "../lib/index";

export default function SubsForm({ title }: any) {
  const [selectedMethod, setSelectedMethod] = useState<string | undefined>();
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState(dateFormatter(new Date()));
  const [BilingCycle, setBillingCycle] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

  const handleChangeText = (e: string) => {
    const numericValue = e.replace(/[^0-9.]/g, "");
    setAmount(numericValue);
  };

  return (
    <View
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
      <View style={styles.form}>
        <ThemedText style={styles.inputHeading}>AMOUNT</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={"$" + amount}
          keyboardType="numeric"
        />

        {/* <ThemedText style={styles.inputHeading}>NEXT PAYMENT</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={text}
          placeholder="Enter text here"
        /> */}

        <ThemedText style={styles.inputHeading}>DUE DATE</ThemedText>
        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
          <TextInput style={styles.input} value={dueDate} editable={false} />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          onConfirm={(date) => {
            setDatePickerVisibility(false);
            setDueDate(dateFormatter(date));
          }}
          onCancel={() => setDatePickerVisibility(false)}
        />

        <ThemedText style={styles.inputHeading}>Billing Cycle</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setBillingCycle(e)}
          value={BilingCycle}
        />
        <ThemedText style={styles.inputHeading}>Payment Method</ThemedText>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedMethod}
          selectedId={selectedMethod}
          layout="row"
          labelStyle={{ color: "#FFF" }}
          containerStyle={{ flexWrap: "wrap" }}
        />
      </View>
    </View>
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
