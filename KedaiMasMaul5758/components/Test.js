import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Tes</Text>
        <Text style={styles.text}>Tes</Text>
        <Text style={styles.text}>Tes</Text>
        <Text style={styles.text}>Tes</Text>
        <Text style={styles.text}>Tes</Text>
        <Text style={styles.text}>Tes</Text>
        <Text style={styles.text}>Tes</Text>
        <Text style={styles.text}>Tes</Text>
      </View>
      <View style={styles.fixedBottom}>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Bayar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 60, // Tinggi komponen tetap di bagian bawah
  },
  text: {
    marginBottom: 20,
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F2B040',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Test;
