import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ShoppingCart = ({ route }) => {
  const navigation = useNavigation();
  const cartItems = route?.params?.cartItems || [];

  const [remainingItems, setRemainingItems] = useState([]);

  useEffect(() => {
    mergeCartItems();
  }, [cartItems]);

  const mergeCartItems = () => {
    const mergedItems = cartItems.reduce((result, item) => {
      const existingItem = result.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        result.push({ ...item, quantity: 1 });
      }
      return result;
    }, []);
    setRemainingItems(mergedItems);
  };

  const handleGoBack = () => {
    navigation.goBack('index');
  };

  const handleContinue = () => {
    const totalAmount = calculateTotalAmount(remainingItems);
    navigation.navigate('PaymentTf', { totalAmount });
  };

  const handleRemoveItem = (item) => {
    const updatedItems = remainingItems.filter((cartItem) => cartItem.id !== item.id);
    setRemainingItems(updatedItems);
  };

  const handleAddButtonPress = (item) => {
    const updatedItems = remainingItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setRemainingItems(updatedItems);
  };

  const handleRemoveButtonPress = (item) => {
    const updatedItems = remainingItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setRemainingItems(updatedItems);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.harga}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleRemoveItem(item)} style={styles.trashButton}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveButtonPress(item)} style={styles.minusButton}>
          <Icon name="minus" size={20} color="Red" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleAddButtonPress(item)} style={styles.plusButton}>
          <Icon name="plus" size={20} color="Green" />
        </TouchableOpacity>
  


      </View>
    </View>
  );

  const renderTotalPrice = () => (
    <View style={styles.bottomContainer}>
      <Text style={styles.totalAmount}>Total : Rp {calculateTotalAmount(remainingItems)}</Text>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  const calculateTotalAmount = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = parseInt(item.harga.replace('Rp ', '').replace('.', ''));
      total += price * item.quantity;
    });
    return total.toLocaleString('id-ID');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={handleGoBack}>
          <Icon name="angle-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Cart</Text>
      </View>
      <FlatList
        data={remainingItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
      {renderTotalPrice()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  back: {
    marginRight: 115,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 45,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  plusButton: {
    marginRight: 5,
  },
  trashButton: {
    marginRight: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F2B040',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  continueButton: {
    backgroundColor: '#F5D247',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ShoppingCart;
