import React from 'react';
import { View, StyleSheet, Text, SectionList, Image, TouchableOpacity ,} from 'react-native';

const Drink = ({handleAddButtonPress}) => {

    const ProductFlavorItem = [
        { id: 1, image: require("../../assets/es.png"), name: "Chocolate Latte", harga: "Rp 10.000" },
        { id: 2, image: require("../../assets/food1.png"), name: "Coffe Latte", harga: "Rp 10.000" },
        { id: 3, image: require("../../assets/Drink/GreenTea.png"), name: "Green Tea Latte", harga: "Rp 10.000" },
        { id: 4, image: require("../../assets/food1.png"), name: "Thai Tea Latte", harga: "Rp 10.000" },
        { id: 5, image: require("../../assets/Drink/Red.png"), name: "Red Valvet Latte", harga: "Rp 10.000" },
        { id: 6, image: require("../../assets/food1.png"), name: "Taro latte", harga: "Rp 10.000" },
        { id: 7, image: require("../../assets/Drink/Mangga.png"), name: "Manggo Latte", harga: "Rp 10.000" },
        { id: 8, image: require("../../assets/food1.png"), name: "Brown Sugar Latte", harga: "Rp 10.000" },
      ];
      
      const ProductIceDrink = [
        { id: 1, image: require("../../assets/GoodDay.png"), name: "Es Good day", harga: "Rp 5.000" },
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
        { id: 1, image: require("../../assets/Drink/Esjeruk.png"), name: "Es Jeruk", harga: "Rp 5.000" },
        { id: 2, image: require("../../assets/Drink/EsTeh.png"), name: "Es The Manis", harga: "Rp 5.000" },
        { id: 3, image: require("../../assets/Drink/Tehtarik.png"), name: "Es Teh Tarik", harga: "Rp 5.000" },
        { id: 4, image: require("../../assets/Drink/LemonTea.png"), name: "Lemon Tea", harga: "Rp 7.000" },
        { id: 5, image: require("../../assets/Drink/Leci.png"), name: "Leci Tea", harga: "Rp 7.000" },
        { id: 6, image: require("../../assets/ovaltine.jpg"), name: "Ovaltime", harga: "Rp 5.000" },
        { id: 7, image: require("../../assets/milo.png"), name: "Milo", harga: "Rp 5.000" },
        { id: 8, image: require("../../assets/Nutrisari.png"), name: "Nutrisari", harga: "Rp 5.000" },
        { id: 9, image: require("../../assets/Fanta.png"), name: "Fanta", harga: "Rp 5.000" },
        { id: 10, image: require("../../assets/Cocacola.png"), name: "Coca Cola", harga: "Rp 5.000" },
        { id: 11, image: require("../../assets/Sprite.png"), name: "Sprite", harga: "Rp 5.000" },
        { id: 12, image: require("../../assets/Pulpy.png"), name: "Pulpy Orange", harga: "Rp 6.000" },
        { id: 13, image: require("../../assets/Frestea.png"), name: "Frestea", harga: "Rp 5.000" },
        { id: 14, image: require("../../assets/Ades.png"), name: "Ades", harga: "Rp 5.000" },
        { id: 15, image: require("../../assets/Aqua.png"), name: "Aqua", harga: "Rp 4.000" },
        { id: 16, image: require("../../assets/Leminerale.png"), name: "Le Minerale", harga: "Rp 4.000" },
        { id: 17, image: require("../../assets/Nutriboots.png"), name: "Nutri Boots", harga: "Rp 8.000" },
      ];
      
      const ProductHotDrinks = [
        { id: 1, image: require("../../assets/Liong.png"), name: "Liong Bulan", harga: "Rp 4.000" },
        { id: 2, image: require("../../assets/kapal.png"), name: "Kapal Api", harga: "Rp 4.000" },
        { id: 3, image: require("../../assets/GoodDay.png"), name: "Good Day", harga: "Rp 4.000" },
        { id: 4, image: require("../../assets/ToraBika.png"), name: "Tora Bika", harga: "Rp 4.000" },
        { id: 5, image: require("../../assets/Cappuccino.png"), name: "Cappuchino", harga: "Rp 5.000" },
        { id: 6, image: require("../../assets/WhiteCoffe.png"), name: "White Coffe", harga: "Rp 5.000" },
        { id: 7, image: require("../../assets/SusuJahe.png"), name: "Susu Jahe", harga: "Rp 5.000" },
      ];
    
    const data = [{ title: "FlavorItem", data:ProductFlavorItem},
                  { title: "Ice Drink", data:ProductIceDrink },
                  { title: "Fruit Juice", data:ProductFruitJuice },
                  { title: "Special Drink", data:ProductSpecialDrink },
                  { title: "Hot Drink", data:ProductHotDrinks }];
    const RenderProductItem = ({ item }) => (
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
        <SectionList sections={data}
            renderItem={({ item }) => <RenderProductItem item={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", backgroundColor: "orange", padding: 5 }}>{title}</Text>
            )} />
    );
}

const styles = StyleSheet.create({
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
        width: 45,
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
})

export default Drink;
