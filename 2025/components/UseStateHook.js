import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

export default function UseStateHook() {

  const [numero, setNumero] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.respostaText}>{numero}</Text>
      <Divider style={styles.divider}/>
      <TouchableOpacity style={[styles.btn, styles.btnAumenta]} onPress={() => { setNumero(numero + 1); }}>
        <Text style={styles.btnText}>Aumentar Valor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnDiminui]} onPress={() => { setNumero(numero - 1); }}>
        <Text style={styles.btnText}>Diminuir Valor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnMultiplicar]} onPress={() => { setNumero(numero*numero); }}>
        <Text style={styles.btnText}>Multiplicar Valor por ele mesmo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  btn: {
    backgroundColor: 'powderblue',
    borderRadius: 8,
    marginBottom: 30,
    height: 40,
    padding: 10,
    width: 120,
    alignItems: 'center'
  },
  btnAumenta: {
    backgroundColor: 'green'
  },
  btnDiminui: {
    backgroundColor: 'red'
  },

  btnText: {
    color: '#fff'
  },
  respostaText: {
    paddingBottom: 10,
    fontSize: 40
  },
  divider: {
    backgroundColor: '#000',
    height: 2,
    width: '80%',
    marginBottom: 40
  }
});
