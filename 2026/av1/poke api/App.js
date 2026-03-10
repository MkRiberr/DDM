import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [pokemon, setPokemon] = useState('');
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [imagem, setImagem] = useState(null);
  const [loading, setLoading] = useState(false);

  async function buscarPokemon() {
    if (!pokemon) return;

    try {
      setLoading(true);
      setNome('Loading...');
      setNumero('');
      setImagem(null);

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

      if (!response.ok) {
        throw new Error('Pokémon não encontrado');
      }

      const data = await response.json();

      setNome(data.name);
      setNumero(`#${data.id}`);
      setImagem(data.sprites.other['official-artwork'].front_default);

    } catch (error) {
      setNome('Não encontrado :(');
      setNumero('');
      setImagem(null);
    } finally {
      setLoading(false);
      setPokemon('');
    }
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Nome ou número"
        value={pokemon}
        onChangeText={setPokemon}
      />

      <TouchableOpacity style={styles.button} onPress={buscarPokemon}>
        <Text style={styles.buttonText}>Buscar Pokémon</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="red" />}

      <Text style={styles.name}>{numero} {nome}</Text>

      {imagem && (
        <Image
          source={{ uri: imagem }}
          style={styles.image}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6ab7f5',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#e3350d',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});