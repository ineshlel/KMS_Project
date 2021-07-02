
import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet , ScrollView,Alert,FlatList}from 'react-native';

import LinkItem from '../components/linkItem';
import { COLORS } from '../constants';
import ReunionForma from './addLinkForma';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';




//import Icon from 'react-native-vector-icons/Ionicons';






const LinkReunionForma=props=>{
 
    const[addInputs,setaddInputs]=useState([]);
    const[links,setLinks]=useState([]);
   

    const addInputHandler= (inputValue)=>{
        setaddInputs(currentInputs=>[...addInputs,
          {id:Math.random().toString(),value2:inputValue}]);
         
        
      }

      useEffect(async() => {
        const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
        fetch(apiConfig.url+`/api/reunionsCour?coursreunion=${props.id_c}`, {
          method: 'GET',
          headers: {
        
            'Authorization':'Bearer ' + DEMO_TOKEN,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('JSONLinks',responseJson)
            setLinks(responseJson)
          })
          .catch((error) => {
            console.error(error);
            setLinks([])
          });
      }, []);

   
    
  
  //<View><AddCircleOutline    /></View>
   //onPress={() => _changeIcon()}
    return (
    <ScrollView>
    <View  style={styles.formContainer}>
    <View style={styles.titleStyle}>
   
    </View>
    
    
    <ReunionForma
    onAddField={addInputHandler}
    id_c={props.id_c}
    />
     
     <View >
    <FlatList
      
         style={{flexGrow: 0}}
            data={links}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <LinkItem
           
           
            name={item.lien}
            />
            
        }
        />
 
    </View>
  
    <View >
    <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={addInputs} 
      renderItem={itemData=> 
      <LinkItem
    
      id ={itemData.item.id}
      name={itemData.item.value2}
     
      />
      }>
       
      </FlatList>
    </View>
   
     
   
    
    
    
</View>
   </ScrollView> 
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       // padding:20,
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

export default LinkReunionForma;