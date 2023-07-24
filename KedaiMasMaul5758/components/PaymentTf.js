import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

const PaymentTf = ({ route }) => {
  const navigation = useNavigation();
  const { totalAmount } = route.params;
  const [paymentAmount, setPaymentAmount] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Cash");

  const handleGoBack = () => {
    navigation.goBack("Shoppingcart");
  };

  const handlePaymentAmountChange = (text) => {
    setPaymentAmount(text);
  };

  const handlePayment = () => {
    navigation.navigate("Paymentsukses");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={handleGoBack}>
          <Icon name="angle-left" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>PAYMENT</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.InputNom}>
          <View style={styles.paymentRow}>
            <Text style={styles.label}>Total Price:</Text>
            <Text style={styles.totalPrice}>Rp {totalAmount}</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.label}>Metode Pembayaran:</Text>
            <Picker
              style={styles.paymentMethodPicker}
              selectedValue={selectedPaymentMethod}
              onValueChange={(itemValue) => setSelectedPaymentMethod(itemValue)}>
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="BCA" value="BCA" />
              <Picker.Item label="Gopay" value="Gopay" />
              <Picker.Item label="Shopee" value="Shopee" />
            </Picker>
          </View>

          {/* <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Keterangan"
              onChangeText={handlePaymentAmountChange}
              // value={paymentAmount}
              keyboardType=""
            />
          </View> */}
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>Pembayaran Sukses</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  back: {
    marginRight: 130,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  InputNom: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  paymentMethodPicker: {
    flex: 1,
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    height: 40,
  },
  button: {
    backgroundColor: "#F2B040",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default PaymentTf;
