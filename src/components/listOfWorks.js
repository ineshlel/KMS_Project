import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet , ScrollView,Alert,FlatList}from 'react-native';
import { COLORS } from '../constants';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';




//import Icon from 'react-native-vector-icons/Ionicons';
import AddWork from './addWork';
import ItemAdded from './itemAdded';




const ListOfWorks=({route})=>{
 
    const[addInputs,setaddInputs]=useState([]);
    const[works,setWorks]=useState([]);
   

    const addInputHandler= (inputValue)=>{
        setaddInputs(currentInputs=>[...addInputs,
          {id:Math.random().toString(),value2:inputValue}]);
         
        
      }
      /*useEffect(async() => {
        const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
        fetch(apiConfig.url+'/api/travaux/', {
          method: 'GET',
          headers: {
        
            'Authorization':'Bearer ' + DEMO_TOKEN,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('JSON',responseJson)
            setaddInputs(responseJson)
          })
          .catch((error) => {
            console.error(error);
            setaddInputs([])
          });
      }, []);*/
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
  
  //<View><AddCircleOutline    /></View>
   //onPress={() => _changeIcon()}
    return (
    <ScrollView>
    <View  style={styles.formContainer}>
    <View style={styles.titleStyle}>
   
    </View>
    
    
    
    <AddWork
    id_pg={route.params}
    onAddField={addInputHandler}
    />
    <View >
    <FlatList
      
         style={{flexGrow: 0}}
            data={works}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> 
            <ItemAdded 
           
            id_tr={item.id}
            value={item.titre}
            />
            
        }
        />
 
    </View>
    <View >
    <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={addInputs} 
      renderItem={itemData=> 
      <ItemAdded 
    
      id ={itemData.item.id}
      value={itemData.item.value2}
      id_pg={route.params}
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

export default ListOfWorks;