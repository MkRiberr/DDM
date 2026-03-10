import { useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

const reducer = (state, action) => {
    //state === { valor: 0 }
    //action === { type: string, payload: 1 }

    switch(action.type) {
        case 'aumentar': //NUNCA DEVEMOS ALTERAR O OBJETO DO STATE DIRETAMENTE!
            return {...state, valor: state.valor + action.payload };
        case 'diminuir': //NUNCA DEVEMOS ALTERAR O OBJETO DO STATE DIRETAMENTE!
            return {...state, valor: state.valor - action.payload };
        default: 
            return state;
    }
}

export default function UseReducerHook() {

    const [state, dispatch] = useReducer(reducer, { valor: 0 });
    //useState retorna dois valores: o estado (valor) e a função de 
    //alteração do estado (que altera o valor do estado "valor");

    //dispatch: função usada para chamar um reducer (definimos a action que 
    //será enviada ao reducer);

    //reducer: função chamada toda vez que quisermos atualizar um estado do
    //componente.

    //reducer recebe dois parâmetros clássicos: state e action:
    //- state: é o próprio estado do componente que estamos manipulando.
    //- action: objeto que dirá qual tipo de ação deve ser feita no estado.

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.respostaText}>{state.valor}</Text>
      <Divider style={styles.divider}/>
      <TouchableOpacity style={[styles.btn, styles.btnAumenta]} onPress={() => dispatch({
        type: 'aumentar', payload: 1
      })}>
        <Text style={styles.btnText}>Aumentar Valor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnDiminui]} onPress={() => dispatch({
        type: 'diminuir', payload: 2 
      })}>
        <Text style={styles.btnText}>Diminuir Valor</Text>
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
