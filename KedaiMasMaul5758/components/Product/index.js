import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchItem from "./SearchItem";
import Food from "./Food"
import Drink from "./Drink";
import Snack from './Snack';

const Products = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddButtonPress = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const navTabs = [
    { id: 1, name: "Food", component: <Food handleAddButtonPress={handleAddButtonPress} /> },
    { id: 2, name: "Drink", component: <Drink handleAddButtonPress={handleAddButtonPress} /> },
    { id: 3, name: "Snack", component: <Snack handleAddButtonPress={handleAddButtonPress} /> }
  ];

  const [selectedTab, setTab] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const priceString = item.harga.replace("Rp ", "").replace(".", "");
      const price = parseInt(priceString);
      total += price;
    });
    return total;
  };

  const handleGoToCart = () => {
    navigation.navigate("Shoppingcart", { cartItems: cartItems });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.nav}>
        <SearchItem />
        <View style={styles.tabBar}>
          {navTabs.map((v, index) => (
            <TouchableOpacity style={styles.tabButton} key={index} onPress={() => setTab(index)} >
              <Text style={{ ...styles.tabButtonText, color: (index === selectedTab ? "#F2B040" : "black") }}>{v.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.menuList}>
        {navTabs[selectedTab].component}
      </View>
      <View style={styles.cartContainer}>
        <View style={styles.cartContent}>
          <Text style={styles.cartTotalText}>Total Price: Rp {calculateTotalPrice()}</Text>
          <TouchableOpacity onPress={handleGoToCart} style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Go to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: 10,
  },
  cartButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
export default Products