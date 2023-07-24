import React, { useState } from "react";
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FlatList } from "react-native";

const ProductFlavorItem = [
  { id: 1, image: require("../../assets/es.png"), name: "Chocolate Latte", harga: "Rp 10.000" },
  { id: 2, image: require("../../assets/food1.png"), name: "Coffe Latte", harga: "Rp 10.000" },
  { id: 3, image: require("../../assets/food1.png"), name: "Green Tea Latte", harga: "Rp 10.000" },
  { id: 4, image: require("../../assets/food1.png"), name: "Thai Tea Latte", harga: "Rp 10.000" },
  { id: 5, image: require("../../assets/food1.png"), name: "Red Valvet Latte", harga: "Rp 10.000" },
  { id: 6, image: require("../../assets/food1.png"), name: "Taro latte", harga: "Rp 10.000" },
  { id: 7, image: require("../../assets/food1.png"), name: "Manggo Latte", harga: "Rp 10.000" },
  { id: 8, image: require("../../assets/food1.png"), name: "Brown Sugar Latte", harga: "Rp 10.000" },
];

const ProductIceDrink = [
  { id: 1, image: require("../../assets/food1.png"), name: "Es Good day", harga: "Rp 5.000" },
  { id: 2, image: require("../../assets/food1.png"), name: "Es Coffe mix", harga: "Rp 5.000" },
  { id: 3, image: require("../../assets/food1.png"), name: "Es Jerman", harga: "Rp 5.000" },
  { id: 4, image: require("../../assets/food1.png"), name: "Es NataCino", harga: "Rp 5.000" },
];

const ProductFruitJuice = [
  { id: 1, image: require("../../assets/food1.png"), name: "Jus Jambu Merah", harga: "Rp 10.000" },
  { id: 2, image: require("../../assets/food1.png"), name: "Jus Mangga", harga: "Rp 10.000" },
  { id: 3, image: require("../../assets/food1.png"), name: "Jus Belimbing", harga: "Rp 10.000" },
  { id: 4, image: require("../../assets/food1.png"), name: "Jus Alpukat", harga: "Rp 10.000" },
  { id: 5, image: require("../../assets/food1.png"), name: "Jus Buah Naga", harga: "Rp 10.000" },
];

const ProductSpecialDrink = [
  { id: 1, image: require("../../assets/food1.png"), name: "Es Jeruk", harga: "Rp 5.000" },
  { id: 2, image: require("../../assets/food1.png"), name: "Es The Manis", harga: "Rp 5.000" },
  { id: 3, image: require("../../assets/food1.png"), name: "Es Teh Tarik", harga: "Rp 5.000" },
  { id: 4, image: require("../../assets/food1.png"), name: "Lemon Tea", harga: "Rp 7.000" },
  { id: 5, image: require("../../assets/food1.png"), name: "Leci Tea", harga: "Rp 7.000" },
  { id: 6, image: require("../../assets/food1.png"), name: "Ovaltime", harga: "Rp 5.000" },
  { id: 7, image: require("../../assets/food1.png"), name: "Milo", harga: "Rp 5.000" },
  { id: 8, image: require("../../assets/food1.png"), name: "Nutrisari", harga: "Rp 5.000" },
  { id: 9, image: require("../../assets/food1.png"), name: "Fanta", harga: "Rp 5.000" },
  { id: 10, image: require("../../assets/food1.png"), name: "Coca Cola", harga: "Rp 5.000" },
  { id: 11, image: require("../../assets/food1.png"), name: "Sprite", harga: "Rp 5.000" },
  { id: 12, image: require("../../assets/food1.png"), name: "Pulpy Orange", harga: "Rp 6.000" },
  { id: 13, image: require("../../assets/food1.png"), name: "Frestea", harga: "Rp 5.000" },
  { id: 14, image: require("../../assets/food1.png"), name: "Ades", harga: "Rp 5.000" },
  { id: 15, image: require("../../assets/food1.png"), name: "Aqua/Vit", harga: "Rp 4.000" },
  { id: 16, image: require("../../assets/food1.png"), name: "Le Minerale", harga: "Rp 4.000" },
  { id: 17, image: require("../../assets/food1.png"), name: "Nutri Boots", harga: "Rp 8.000" },
];

const ProductHotDrinks = [
  { id: 1, image: require("../../assets/food1.png"), name: "Liong Bulan", harga: "Rp 4.000" },
  { id: 2, image: require("../../assets/food1.png"), name: "Kapal Api", harga: "Rp 4.000" },
  { id: 3, image: require("../../assets/food1.png"), name: "Good Day", harga: "Rp 4.000" },
  { id: 4, image: require("../../assets/food1.png"), name: "Tora Bika", harga: "Rp 4.000" },
  { id: 5, image: require("../../assets/food1.png"), name: "Cappuchino", harga: "Rp 5.000" },
  { id: 6, image: require("../../assets/food1.png"), name: "White Coffe", harga: "Rp 5.000" },
  { id: 7, image: require("../../assets/food1.png"), name: "Susu Jahe", harga: "Rp 5.000" },
];

const DrinkPage = ({ navigation }) => {
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
    <View style={styles.productItemContainer}>
      <Image source={item.image} style={styles.productItemImage} />
      <View style={styles.productItemInfo}>
        <Text style={styles.productItemName}>{item.name}</Text>
        <Text style={styles.productItemPrice}>{item.harga}</Text>
      </View>
      <TouchableOpacity style={styles.productItemAddButton} onPress={() => handleAddButtonPress(item)}>
        <Text style={styles.productItemAddButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <FontAwesome5 name="search" size={20} color="black" />
          </TouchableOpacity>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/Kedai.png")} style={styles.logoImage} />
          <Text style={styles.logoText}>Kedai Mas Maul 5758</Text>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>
        <View style={styles.categoryButtonsContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate("FoodPage")}>
            <Text style={styles.categoryButtonText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={{ ...styles.categoryButtonText, color: "black" }}>Drink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate("SnackPage")}>
            <Text style={styles.categoryButtonText}>Snack</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuList}>
        <Text style={styles.sectionTitle}>Flavor Item</Text>
        <View style={styles.productsContainer}>
          <FlatList data={ProductFlavorItem} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.sectionTitle}>Ice Drink</Text>
        <View style={styles.productsContainer}>
          <FlatList data={ProductIceDrink} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.sectionTitle}>Fruit Juice</Text>
        <View style={styles.productsContainer}>
          <FlatList data={ProductFruitJuice} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.sectionTitle}>Special Drink</Text>
        <View style={styles.productsContainer}>
          <FlatList data={ProductSpecialDrink} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
        </View>

        <Text style={styles.sectionTitle}>Hot Drink</Text>
        <View style={styles.productsContainer}>
          <FlatList data={ProductHotDrinks} keyExtractor={(item) => item.id} renderItem={renderProductItem} />
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
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#F2B040",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    color: "white",
    marginTop: 10,
  },
  categoryButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "grey",
    paddingHorizontal: 10,
    
  },
  categoryButton: {
    borderWidth: 0,
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginVertical: 20,
    color: "#F2B040",
  },
  menuList: {
    flex: 7,
  },
  sectionTitle: {
    fontSize: 20,
    color: "black",
    backgroundColor: "#F5D247",
    padding: 10,
  },
  productsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  productItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  productItemImage: {
    width: 60,
    height: 45,
  },
  productItemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productItemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productItemPrice: {
    fontSize: 20,
    color: "#F2B040",
    fontWeight: "bold",
  },
  productItemAddButton: {
    width: 45,
    height: 27,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F2B040",
  },
  productItemAddButtonText: {
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

export default DrinkPage;
