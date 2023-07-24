import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Loginpage');
    }, 3000); 
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Kedai.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2B040",
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export default SplashScreen;
