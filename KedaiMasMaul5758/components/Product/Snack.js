import React from 'react';
import { View, StyleSheet, Text, SectionList, Image, TouchableOpacity } from 'react-native';

const Snack = ({handleAddButtonPress}) => {

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
        { id: 12, image: require("../../assets/Food/cubit.png"), name: "Kue Cubit", harga: "Rp 10.000" },
    ];
    const data = [{ title: "Paket Pisang", data: ProductPisang }];
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
})

export default Snack;
