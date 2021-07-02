import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,FlatList}from 'react-native';

import ConsigneItem from '../components/consigneItem';
import { COLORS } from '../constants';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import ConsigneItemRem from './consigneItemRemise';

const ConsignesList= props =>{

 const[consignes,setConsignes]=useState([]);
 useEffect(async() => {
  const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
 
  fetch(apiConfig.url+`/api/consignes?travail=${props.idtr}`, {
    method: 'GET',
    headers: {
  
      'Authorization':'Bearer ' + DEMO_TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('JSONWorks',responseJson)
      setConsignes(responseJson)
    })
    .catch((error) => {
      console.error(error);
      setConsignes([])
    });
}, []);

 return (
  
    <View style={styles.Container} >
       <FlatList
      
      style={{flexGrow: 0}}
         data={consignes}
         keyExtractor={(item,index)=>index.toString()}
         renderItem={({item})=> 
         <ConsigneItemRem
         id ={item.id}
         name={item.file_name}
         />
         
     }
     />
      
        
        
   
    </View>
 )
}
const styles=StyleSheet.create({

      Container:{
         flex:1,
         // backgroundColor:COLORS.purple,
         
          
      },
     
 
});

export default ConsignesList;