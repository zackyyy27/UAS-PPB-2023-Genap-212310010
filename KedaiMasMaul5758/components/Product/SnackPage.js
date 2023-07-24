import React, { useState } from "react";
import { Image, View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const ProductPisang = [
  { id: 1, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Original", harga: "Rp 10.000" },
  { id: 2, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu", harga: "Rp 10.000" },
  { id: 3, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Susu Cokelat", harga: "Rp 10.000" },
  { id: 4, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Susu Oreo", harga: "Rp 10.000" },
  { id: 5, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Susu Matcha", harga: "Rp 10.000" },
  { id: 6, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Susu Tiramisu", harga: "Rp 13.000" },
  { id: 7, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Cokelat", harga: "Rp 13.000" },
  { id: 8, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Oreo", harga: "Rp 13.000" },
  { id: 9, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Matcha", harga: "Rp 13.000" },
  { id: 10, image: require("../../assets/Snack/Pisang.jpg"), name: "Pisang Keju Susu Tiramisu", harga: "Rp 15.000" },
  { id: 11, image: require("../../assets/Snack/Pisang.jpg"), name: "Choco Banana Crispy", harga: "Rp 10.000" },
];

const SnackPage = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  const handleAddButtonPress = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const priceString = item.harga.replace("Rp ", "").replace(".", "");
      const price = parseInt(priceString);
      total += price;
    });
    return total;
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInfoContainer}>
        <Image source={item.image} style={styles.foodImage} />
        <View style={styles.foodDescContainer}>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.foodPrice}>{item.harga}</Text>
        </View>
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={() => handleAddButtonPress(item)}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.NavBar}>
          <View style={styles.searchBar}>
            <TouchableOpacity>
              <FontAwesome5 name="search" size={20} color="black" />
            </TouchableOpacity>
            <TextInput style={styles.searchInput} placeholder="Search" />
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/Kedai.png")} style={styles.logoImage} />
          <Text style={styles.logoText}>Kedai Mas Maul 5758</Text>
          <Text style={styles.Judul}>Menu</Text>
        </View>
        <View style={styles.OpsiList}>
          <TouchableOpacity style={styles.Button1} onPress={() => navigation.navigate("FoodPage")}>
            <Text style={styles.TextOpsi}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1} onPress={() => navigation.navigate("DrinkPage")}>
            <Text style={styles.TextOpsi}>Drink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1}>
            <Text style={{ ...styles.TextOpsi, color: "black" }}>Snack</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.MenuList}>
        <Text style={styles.JudulMenu}>Paket Pisang</Text>
        <View style={styles.Food}>
          <FlatList data={ProductPisang} keyExtractor={(item) => item.id.toString()} renderItem={renderProductItem} />
        </View>
      </View>
      <View style={styles.cartContainer}>
        <View style={styles.cartContent}>
          <Text style={styles.cartTotalText}>Total Price: Rp {calculateTotalPrice()}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Shoppingcart")} style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Go to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  nav: {
    borderBottomWidth: 2,
    borderColor: "grey",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  NavBar: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
    searchBar: {
      marginLeft: 10,
      alignItems: "center",
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 20,
      padding: 5,
      paddingLeft: 10,
      width: "90%",
      height: "auto",
  },
  searchInput: {
    width: "100%",
    height: 35,
    borderWidth: 0,
    borderRadius: 20,
    padding: 5,
    marginLeft: 5,
  },
  logoContainer: {
    alignItems: "center",
    padding: 15,
  },
  logoImage: {
    width: 120,
    height: 120,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Judul: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#F2B040",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    color: "white",
    marginTop: 10,
  },
  OpsiList: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "grey",
  },
  Button1: {
    borderWidth: 0,
  },
  TextOpsi: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginVertical: 20,
    color: "#F2B040",
  },
  MenuList: {
    flex: 7,
  },
  Food: {
    flexDirection: "row",
    alignItems: "center",
  },
  JudulMenu: {
    fontSize: 20,
    color: "black",
    backgroundColor: "#F5D247",
    padding: 10,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  productInfoContainer: {
    flexDirection: "row",
  },
  foodImage: {
    width: 60,
    height: 45,
  },
  foodDescContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  foodPrice: {
    fontSize: 20,
    color: "#F2B040",
    fontWeight: "bold",
  },
  addButtonContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  addButton: {
    width: 45,
    height: 27,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F2B040",
  },
  addButtonText: {
    fontSize: 15,
  },
  cartContainer: {
    justifyContent: "space-between",
    backgroundColor: "#F2B040",
    paddingVertical: 10,
  },
  cartContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cartTotalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  cartButton: {
    backgroundColor: "#F5D247",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  cartButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default SnackPage;
