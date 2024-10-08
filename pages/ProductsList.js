import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar a tela inteira
    justifyContent: 'center', // Centralizar verticalmente
    alignItems: 'center', // Centralizar horizontalmente
    backgroundColor: '#f5f5f5', // Cor de fundo clara
  },
  text: {
    fontSize: 24, // Tamanho do texto
    fontWeight: 'bold', // Texto em negrito
    color: '#333', // Cor do texto
  },
});

export default HelloWorldScreen;