import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import { unstable_createElement } from 'react-native-web';

const api = async(callback) => {
  const resposta = await fetch('https://rickandmortyapi.com/api/episode');
  const parsed = await resposta.json();
  callback(parsed.results)
}
export default function App() {
  const[registro, setRegistros] = useState([]);
  useEffect(()=>{
    api(setRegistros);
  },[]);


  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Lista Episodios Rick and Morty</Text>

  
      <FlatList
     data={registro}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem = {({item})=> <Text style={estilo.item}> Nome do Episódio: {item.name} -  Data de Lançamento: {item.air_date} - Número do episódio: {item.episode }   
      
      </Text>}
      
      />
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 30,
    marginTop:30
  },
  item:{
    flex: 1,
    paddingVertical: 10,
    textAlign:'center',
    borderRadius: 14,
    backgroundColor: '#F6CED8',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: 220,
    height: 130


  }





});
