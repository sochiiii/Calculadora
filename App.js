import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Boton from './src/components/boton'
import Input from './src/components/input'
 
 
export default function App() {
 
  //Escribir codigo js
 
  //State de la aplicación
  const [numero1,setNumero1]=useState(0)
  const [numero2,setNumero2]=useState(0)
  const [resultado,setResultado]=useState(0)
 
  //Hacer que se sumen dos números
  const suma = ()=>{
    let sumatoria=parseFloat(numero1)+parseFloat(numero2);
    setResultado(sumatoria);
  }
 
  const resta = ()=>{
    let resta=parseFloat(numero1)-parseFloat(numero2);
    setResultado(resta);
  }
 
  const multiplica = ()=>{
    let multiplicacion=parseFloat(numero1)*parseFloat(numero2);
    setResultado(multiplicacion);
  }
 
  const division = ()=>{
    let division=parseFloat(numero1)/parseFloat(numero2);
    setResultado(division);
  }
 
  const limpiar = () =>{
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }
 
  return (
    <View style={styles.container}>
     
      <Text>Suma de números</Text>
      <Text>Numero 1:</Text>
      <Input
      TextColor={'white'}
      estilo={{backgroundColor:'gray', padding:5, margin:5}}
      numero={'Número 1: '}
      valor={numero1}
      funcion={setNumero1}>
      </Input>
 
      <Text>Numero 2:</Text>
      <Input
      TextColor={'white'}
      estilo={{backgroundColor:'gray', padding:5, margin:5}}
      numero={'Número 2: '}
      valor={numero2}
      funcion={setNumero2}>
      </Input>
 
      <Boton
      estilo_texto={{color: 'white'}}
      estilo={{backgroundColor: 'green', padding:5, margin:5}}
      texto='Sumar números'
      funcion={suma}/>
 
      <Boton
      estilo_texto={{color: 'white'}}
      estilo={{backgroundColor: 'green', padding:5, margin:5}}
      texto='Restar números'
      funcion={resta}/>
 
    <Boton
      estilo_texto={{color: 'white'}}
      estilo={{backgroundColor: 'green', padding:5, margin:5}}
      texto='Multiplicar números'
      funcion={multiplica}/>
 
      <Boton
      estilo_texto={{color: 'white'}}
      estilo={{backgroundColor: 'green', padding:5, margin:5}}
      texto='Dividir números'
      funcion={division}/>
 
 
      <StatusBar style="auto" />
      <Text style={{color:'red', fontSize:30, margin:1}}>Numero 1: {numero1}</Text>
      <Text style={{color:'red', fontSize:30, margin:1}}>Numero 2: {numero2}</Text>
      <Text style={{color:'red', fontSize:30, margin:1}}>Resultado: {resultado}</Text>
 
      <Boton
      estilo_texto={{color: 'white'}}
      estilo={{backgroundColor: 'red', padding:5, margin:5}}
      texto='Resetear'
      funcion={limpiar}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});