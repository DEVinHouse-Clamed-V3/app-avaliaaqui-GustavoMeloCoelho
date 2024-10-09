import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

const ProductsList = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.0.156:3000/products')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(() => {
        Alert.alert('Não foi possível obter os dados')
      })

  }, []);


  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source= {{ uri: item.image }}
        style={styles.image}  
      />

      <View style={styles.descriptionContainer}>
        <Text>{item.name}</Text>
        <Text>Marca: {item.brand}</Text>
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Botão Avaliar pressionado!')}>
          <Text style={styles.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products} // Sua lista de dados
        keyExtractor={item => item.id.toString()} // Convertendo id para string
        renderItem={renderItem} // Chamando a função para renderizar cada item
      />
    </SafeAreaView>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar a tela inteira
    backgroundColor: '#f5f5f5', // Cor de fundo clara
  },
  text: {
    fontSize: 24, // Tamanho do texto
    fontWeight: 'bold', // Texto em negrito
    color: '#333', // Cor do texto
  },
  card: {
    width: '100%',
    height: 250,
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 130,
    height: 160,
    marginRight: 20,
    marginLeft: 17,
  },
  button: {
    backgroundColor: '#ff0000', // Cor vermelha do botão
    width: 93,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,

  },
  descriptionContainer: {
    width: '59%',
    backgroundColor: 'green'
  }
});

export default ProductsList;