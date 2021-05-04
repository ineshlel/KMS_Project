import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,FlatList}from 'react-native';

import { NavigationContainer,useNavigation } from '@react-navigation/native';
import ConsigneItem from '../components/consigneItem';
import { COLORS } from '../constants';

//import axios from 'axios';

//const navigation = useNavigation();

//export default class FlatListPC extends React.Component{
const ConsignesList= ({navigation,props}) =>{

 const[consignes,setConsignes]=useState([
   {
     id:1,
     name:'consigne 1'
   },
   {
     id:2,
     name:'consigne 2'
   },
   {
    id:3,
    name:'consign 3'
  },
  {
    id:3,
    name:'consign 3'
  },
  {
    id:3,
    name:'consign 3'
  },
  {
    id:3,
    name:'consign 3'
  },
  

  
 ]);
/* state={
   programs:[],
  
}*/
/*useEffect(() => {
  fetch('https://api.openbrewerydb.org/breweries')
    .then((response) => response.json())
    .then((responseJson) => {
      setPrograms(responseJson);
     
    })
    .catch((error) => {
      console.error(error);
    });
}, []);*/

 return (
  
    <View style={styles.Container} >
        <FlatList
            data={consignes}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <ConsigneItem
              name={item.name}
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