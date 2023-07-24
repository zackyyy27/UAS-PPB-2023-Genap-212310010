import React from 'react';
import { View, StyleSheet, Text, SectionList, Image, TouchableOpacity } from 'react-native';

const Food = ({handleAddButtonPress}) => {
    const ProductNasiAyam = [
        { id: 1, image: require("../../assets/Food/tahu.png"), name: "Tahu", harga: "Rp 2.000" },
        { id: 2, image: require("../../assets/Food/tempe.png"), name: "Tempe", harga: "Rp 2.000" },
        { id: 3, image: require("../../assets/Food/nasi.png"), name: "Nasi", harga: "Rp 5.000" },
        { id: 4, image: require("../../assets/Food/tempemendoann.png"), name: "Tempe Mendoan", harga: "Rp 10.000" },
        { id: 5, image: require("../../assets/Food/NasiAyam.png"), name: "Ayam Serundeng", harga: "Rp 10.000" },
        { id: 6, image: require("../../assets/Food/NasiAyam.png"), name: "Nasi Ayam Serundeng", harga: "Rp 16.000" },
        { id: 7, image: require("../../assets/Food/NasiAyam.png"), name: "Paket Nasi Ayam", harga: "Rp 18.000" },
        { id: 8, image: require("../../assets/Food/NasiAyam.png"), name: "Nasi Ayam Pok-pok Telur", harga: "Rp 20.000" },
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
        { id: 1, image: require("../../assets/Food/nasigoreng.png"), name: "Nasi Goreng", harga: "Rp 15.000" },
        { id: 2, image: require("../../assets/Food/seblak.png"), name: "Seblak", harga: "Rp 15.000" },
        { id: 3, image: require("../../assets/Food/ceker.png"), name: "Sambal Ceker", harga: "Rp 15.000" },
        { id: 4, image: require("../../assets/Food/pentol.png"), name: "Pentol Kuah", harga: "Rp 15.000" },
        { id: 5, image: require("../../assets/Food/okonomiyaki.png"), name: "Okonomiyaki", harga: "Rp 13.000" },
        { id: 6, image: require("../../assets/Food/omlet.png"), name: "Omlet Korea", harga: "Rp 13.000" },
        { id: 7, image: require("../../assets/Food/bakso.png"), name: "Bakso Solo isi Daging", harga: "Rp 15.000" },
      ];
    
    const data = [{ title: "Paket Nasi", data: ProductNasiAyam},
                  { title: "Paket Baru ", data: ProductBaru},
                  { title: "Paket Indomie", data: ProductIndomie }];
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
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", backgroundColor: "orange", padding: 5 ,textAlign:'center'}}>{title}</Text>
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
        width: 50,
        height: 35,
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

export default Food;
