import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";


const SearchItem = () => {
    return (
        <View style={styles.nav}>
            <View style={styles.NavBar}>
                {/* <View style={styles.searchBar}>
                    <FontAwesome5 name="search" size={20} color="black" />
                    <TextInput style={styles.searchInput} placeholder="Search" />
                </View> */}
            </View>
            <View style={styles.header}>
                <Image source={require("../../assets/Kedai.png")} style={styles.logo} />
                <Text style={styles.headerTitle}>Kedai Mas Maul 5758</Text>
                <Text style={styles.headerSubtitle}>Menu</Text>
            </View>
        </View>
    )
}

export default SearchItem;

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
    
});