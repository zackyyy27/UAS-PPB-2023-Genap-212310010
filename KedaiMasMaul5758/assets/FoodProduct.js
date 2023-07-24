import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FoodProduct = () => {
  const handleBackPress = () => {
    // Implementasikan logika untuk menangani tombol kembali
    console.log("Tombol Kembali Ditekan");
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Judul FoodProduct</Text>
      <View style={styles.emptyPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "blue",
    paddingHorizontal: 10,
  },
  backButton: {
    paddingHorizontal: 5,
  },
  backButtonText: {
    color: "white",
    fontSize: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyPlaceholder: {
    width: 40, // Lebar ini hanya sebagai tumpuan agar judul berada di tengah
  },
});

export default FoodProduct;
