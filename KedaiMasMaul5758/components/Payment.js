import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity,} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    "Transfer BCA"
  );

  const handleGoBack = () => {
    navigation.navigate("Foodpage");
  };

  const paymentMethods = [
    { id: "cash", logo: require("../assets/cash.png"), text: "Cash" },
    { id: "bca", logo: require("../assets/BCA.png"), text: "BANK BCA" },
    { id: "gopay", logo: require("../assets/Gopay.png"), text: "Gopay" },
    { id: "ShopeePay",logo: require("../assets/ShopeePay.png"), text: "Shopee Pay",},
  ];

  const renderPaymentMethodItem = ({ item }) => {
    const onPressPaymentMethod = () => {
      setSelectedPaymentMethod(item.text);
      if (item.id === "cash") {
        navigation.navigate("Paymentcash");
      } else if (
        item.id === "bca" ||
        item.id === "gopay" ||
        item.id === "ShopeePay"
      ) {
        navigation.navigate("PaymentTf", { paymentMethod: item.text });
      }
    };

    return (
      <TouchableOpacity
        style={styles.paymentMethodItem}
        onPress={onPressPaymentMethod}
      >
        <Image source={item.logo} style={styles.paymentMethodLogo} />
        <Text style={styles.paymentMethodText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={handleGoBack}>
          <Icon name="angle-left" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PAYMENT</Text>
        </View>
      </View>

      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={renderPaymentMethodItem}
      />
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
    marginRight:1 ,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  paymentMethodItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  paymentMethodLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  paymentMethodText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Payment;
