import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Linha de produtos */}
      <View style={styles.productRow}>
        <Image
          source={require('../assets/blastoise.jpg')} // Substitua pelo caminho correto da imagem
          style={styles.productImage}
        />
        <Image
          source={require('../assets/greed.jpg')} // Substitua pelo caminho correto da imagem
          style={styles.productImage}
        />
        <Image
          source={require('../assets/lotus.png')} // Substitua pelo caminho correto da imagem
          style={styles.productImage}
        />
      </View>

      {/* Título */}
      <Text style={styles.title}>Avalie Aqui</Text>

      {/* Texto descritivo */}
      <Text style={styles.description}>
        Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores.
      </Text>

      {/* Botão de entrar */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("ProductsList")}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 150,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
