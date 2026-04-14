import { StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [jogos, setJogos] = useState('');
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ano_lancamento, setAno_lancamento] = useState('');
  const [loading, setLoading] = useState(false);

  async function buscarJogo() {
    if (!jogos) return;

    try {
      setLoading(true);
      setNome('Loading...');
      setNumero('');
      setCategoria('');
      setAno_lancamento('');

      const response = await fetch(`https://api-jogos-wq4x.onrender.com/api/jogos/id/${jogos}`);

      if (!response.ok) {
        throw new Error('Jogo não encontrado');
      }

      const data = await response.json();

      setNome(data.nome);
      setNumero(`#${data.id}`);
      setCategoria(data.categoria);
      setAno_lancamento(data.ano_lancamento)

    } catch (error) {
      setNome('Não encontrado :(');
      setNumero('');

    } finally {
      setLoading(false);
      setJogos('');
    }
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="número"
        value={jogos}
        onChangeText={setJogos}
      />

      <TouchableOpacity style={styles.button} onPress={buscarJogo}>
        <Text style={styles.buttonText}>Buscar Jogo</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="red" />}

      <Text style={styles.nome}>{numero}</Text>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{categoria}</Text>
      <Text style={styles.nome}>{ano_lancamento}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize',
    color:'#fff'
  }
});