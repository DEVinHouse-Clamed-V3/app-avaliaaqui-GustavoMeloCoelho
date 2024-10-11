import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from 'axios';


const Avaliation = ({ route }) => {

  const {products} = route.params;
  console.log("o produto é ",products);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [experience, setExperience] = useState('');
  const [recommend, setRecommend] = useState(false);

  function handleFeedbackSubmit() {
    console.log("ESTOU SENDO CHAMADO")
    axios.post('http://192.168.0.156:3000/evaluations', {
      productId: products.id,
      name: name,
      email:email,
      feedback:feedback,
      experience:experience,
      recommend:recommend
    }).then(() => {
      Alert.alert("Aviso", 'Cadastrado com sucesso')
    })
      .catch((error) => {
        console.log(error)
        Alert.alert("Error", 'Não foi possível cadastrar o biscoito')
      })

  };

  return (
    
    <View style={styles.container}>
      
      <Text style={styles.title}>Nos dê seu Feedback sobre</Text>
      <Text style={styles.title}>{products.name}</Text>
      <Text style={styles.subtitle}>
        Sua opinião é importante para nós. Por favor, compartilhe sua experiência.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva sua experiência..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <Text style={styles.label}>Compartilhe sua experiência</Text>
      <View style={styles.experienceContainer}>
        {['Feliz', 'Bom', 'Médio', 'Ruim'].map((exp) => (
          <TouchableOpacity
            key={exp}
            style={[
              styles.experienceButton,
              experience === exp && styles.experienceButtonSelected
            ]}
            onPress={() => setExperience(exp)}
          >
            <Text
              style={[
                styles.experienceText,
                experience === exp && styles.experienceTextSelected
              ]}
            >
              {exp}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.recommendContainer}>
        <Checkbox
          style={styles.checkbox}
          value={recommend}
          onValueChange={setRecommend}
        />
        <Text style={styles.recommendText}>Recomendaria para outras pessoas?</Text>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={() => handleFeedbackSubmit()}>
        <Text style={styles.submitButtonText}>Enviar Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  experienceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  experienceButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  experienceButtonSelected: {
    backgroundColor: '#ccc',
  },
  experienceText: {
    fontSize: 16,
  },
  experienceTextSelected: {
    fontWeight: 'bold',
  },
  recommendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  recommendText: {
    marginLeft: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkbox: {
    margin: 8,
  },
});

export default Avaliation;
