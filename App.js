import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const alcoolValue = parseFloat(alcool);
    const gasolinaValue = parseFloat(gasolina);

    if (!alcoolValue || !gasolinaValue) {
      setResultado("Por favor, insira valores válidos");
      return;
    }

    if (alcoolValue / gasolinaValue <= 0.7) {
      setResultado("Álcool é a melhor opção!");
    } else {
      setResultado("Gasolina é a melhor opção!");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'data:image/png;base64,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' }} 
        style={styles.image}
      />
      <Text style={styles.title}>Qual a melhor opção?</Text>

      <TextInput
        style={styles.input}
        placeholder="Álcool (preço por litro)"
        keyboardType="numeric"
        value={alcool}
        onChangeText={(value) => setAlcool(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Gasolina (preço por litro)"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={(value) => setGasolina(value)}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#fbbd14',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  result: {
    marginTop: 20,
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
