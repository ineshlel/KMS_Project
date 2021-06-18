import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet ,FlatList}from 'react-native';
import { COLORS } from '../constants';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import ItemAdded from '../components/itemAdded';
import ItemAddedEmpl from '../components/itemAddedEmpl';










const ListOfWorksEmpl=({route})=>{
 
 
    const[works,setWorks]=useState([]);
  
      useEffect(async() => {
        const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
        console.log(route.params);
        fetch(apiConfig.url+`/api/travaux?programme=${route.params}`, {
          method: 'GET',
          headers: {
        
            'Authorization':'Bearer ' + DEMO_TOKEN,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('JSONWorks',responseJson)
            setWorks(responseJson)
          })
          .catch((error) => {
            console.error(error);
            setWorks([])
          });
      }, []);
  
    return (
   
    <View  style={styles.formContainer}>
   
   
    <FlatList
      
         style={{flexGrow: 0}}
            data={works}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <ItemAddedEmpl
           
            id_tr={item.id}
            value={item.titre}
            />
            
        }
        />
 

   
     
   
    
    
    
</View>
  
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        padding:20,
        marginBottom:10
    
      },
      button:{
        width:'90%',
        color:'blue',
        borderRadius:20,
        //marginLeft:60,
        marginTop:20,

      },
      textStyle:{
        fontSize:20,
        color:COLORS.purple,
        justifyContent:'center',
        textAlign:'center',
        
        },
        titleStyle:{
            marginBottom:10,
        },
        listStyle:{
          margin:5,
          
        },
     
});

export default ListOfWorksEmpl;