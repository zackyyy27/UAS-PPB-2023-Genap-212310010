import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Paymentcash = () => {
  const navigation = useNavigation();
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleGoBack = () => {
    navigation.navigate('Payment');
  };

  const handlePaymentAmountChange = (text) => {
    setPaymentAmount(text);
  };

  const handlePayment = () => {
    navigation.navigate('Paymentsukses');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={handleGoBack}>
          <Icon name="angle-left" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>PAYMENT</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.InputNom}>
          <Text style={styles.label}>Masukkan Nominal Pembelian:</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>Rp</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              onChangeText={handlePaymentAmountChange}
              value={paymentAmount}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={handlePayment}>
            <Text style={styles.buttonText}>Bayar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  back: {
    marginRight: 10,
  },
  centerContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  InputNom: {
    width: '100%',
    height: 200,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 3,
    padding: 8,
    fontSize: 16,
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F2B040',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Paymentcash;
