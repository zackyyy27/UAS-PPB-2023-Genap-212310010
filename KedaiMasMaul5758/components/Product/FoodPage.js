import React, { useState } from "react";
import { Image, View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductNasiAyam = [
  { id: 1, image: require("../../assets/Food/NasiAyam.png"), name: "Tahu", harga: "Rp 2.000" },
  { id: 2, image: require("../../assets/Food/NasiAyam.png"), name: "Tempe", harga: "Rp 2.000" },
  { id: 3, image: require("../../assets/Food/NasiAyam.png"), name: "Nasi", harga: "Rp 5.000" },
  { id: 4, image: require("../../assets/Food/NasiAyam.png"), name: "Tempe Mendoan", harga: "Rp 10.000" },
  { id: 5, image: require("../../assets/Food/NasiAyam.png"), name: "Ayam Serundeng", harga: "Rp 10.000" },
  { id: 6, image: require("../../assets/Food/NasiAyam.png"), name: "Nasi Ayam Serundeng", harga: "Rp 16.000" },
  { id: 7, image: require("../../assets/Food/NasiAyam.png"), name: "Paket Nasi Ayam", harga: "Rp 18.000" },
  { id: 8, image: require("../../assets/Food/NasiAyam.png"), name: "Nasi Ayam Pok-pok Te../l../ur", harga: "Rp 20.000" },
];

const ProductIndomie = [
  { id: 1, image: require("../../assets/Food/Mie.png"), name: "Indomie Biasa", harga: "Rp 7.000" },
  { id: 2, image: require("../../assets/Food/Mie.png"), name: "Indomie Telur", harga: "Rp 10.000" },
  { id: 3, image: require("../../assets/Food/Mie.png"), name: "Indomie Telur Keju", harga: "Rp 13.000" },
  { id: 4, image: require("../../assets/Food/Mie.png"), name: "Indomie Telur Kornet", harga: "Rp 15.000" },
  { id: 5, image: require("../../assets/Food/Mie.png"), name: "Indomie Telur Kornet Keju", harga: "Rp 17.000" },
  { id: 6, image: require("../../assets/Food/Mie.png"), name: "Indomie Spesial", harga: "Rp 20.000" },
  { id: 7, image: require("../../assets/Food/Mie.png"), name: "Mie Nyemek", harga: "Rp 15.000" },
];

const ProductBaru = [
  { id: 1, image: require("../../assets/food1.png"), name: "Nasi Goreng", harga: "Rp 15.000" },
  { id: 2, image: require("../../assets/food1.png"), name: "Seblak", harga: "Rp 15.000" },
  { id: 3, image: require("../../assets/food1.png"), name: "Kue Cubit", harga: "Rp 10.000" },
  { id: 4, image: require("../../assets/food1.png"), name: "Sambal Ceker", harga: "Rp 15.000" },
  { id: 5, image: require("../../assets/food1.png"), name: "Pentol Kuah", harga: "Rp 15.000" },
  { id: 6, image: require("../../assets/food1.png"), name: "Okonomiyaki", harga: "Rp 13.000" },
  { id: 7, image: require("../../assets/food1.png"), name: "Omlet Korea", harga: "Rp 13.000" },
  { id: 8, image: require("../../assets/food1.png"), name: "Bakso Solo isi Daging", harga: "Rp 15.000" },
];

const FoodPage = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  const renderProductItem = ({ item }) => {
    const handleAddButtonPress = () => {
      setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
      <View style={styles.productItemContainer}>
        <View style={styles.productItemImageContainer}>
          <Image source={item.image} style={styles.productItemImage} />
        </View>
        <View style={styles.productItemContent}>
          <Text style={styles.productItemName}>{item.name}</Text>
          <Text style={styles.productItemPrice}>{item.harga}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
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

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.NavBar}>
          <View style={styles.searchBar}>
            <FontAwesome5 name="search" size={20} color="black" />
            <TextInput style={styles.searchInput} placeholder="Search" />
          </View>
        </View>
        <View style={styles.header}>
          <Image source={require("../../assets/Kedai.png")} style={styles.logo} />
          <Text style={styles.headerTitle}>Kedai Mas Maul 5758</Text>
          <Text style={styles.headerSubtitle}>Menu</Text>
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={{...styles.tabButtonText,color:"black"}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate("DrinkPage")}>
            <Text style={styles.tabButtonText}>Drink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate("SnackPage")}>
            <Text style={styles.tabButtonText}>Snack</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuList}>
        <Text style={styles.menuCategory}>Paket Nasi Ayam</Text>
        <View style={styles.productList}>
          <FlatList data={ProductNasiAyam} keyExtractor={(item) => item.id.toString()} renderItem={renderProductItem} />
        </View>

        <Text style={styles.menuCategory}>Paket Indomie</Text>
        <View style={styles.productList}>
          <FlatList data={ProductIndomie} keyExtractor={(item) => item.id.toString()} renderItem={renderProductItem} />
        </View>

        <Text style={styles.menuCategory}>Menu Baru</Text>
        <View style={styles.productList}>
          <FlatList data={ProductBaru} keyExtractor={(item) => item.id.toString()} renderItem={renderProductItem} />
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
    flex: 1,
    marginLeft: 5,
  },
  header: {
    alignItems: "center",
    padding: 15,
  },
  logo: {
    width: 120,
    height: 120,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#F2B040",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    color: "white",
    marginTop: 10,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "grey",
  },
  tabButton: {
    borderWidth: 0,
  },
  tabButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginVertical: 20,
    color: "#F2B040",
  },
  menuList: {
    flex: 1,
  },
  productList: {
    paddingHorizontal: 10,
  },
  menuCategory: {
    fontSize: 20,
    color: "black",
    backgroundColor: "#F5D247",
    padding: 10,
  },
  productItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  productItemImageContainer: {},
  productItemImage: {
    width: 60,
    height: 45,
  },
  productItemContent: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  productItemName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left", // Align the text to the left
  },
  productItemPrice: {
    fontSize: 20,
    color: "#F2B040",
    fontWeight: "bold",
  },
  addButton: {
    width: 60,
    height: 30,
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
    justifyContent:"space-between",
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

export default FoodPage;
