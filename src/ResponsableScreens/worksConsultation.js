import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet , ScrollView,Alert,FlatList}from 'react-native';
import { COLORS } from '../constants';




//import Icon from 'react-native-vector-icons/Ionicons';
import AddWork from './addWork';
import ItemAdded from './itemAdded';




const WorksConsultation=()=>{
 
    const[addInputs,setaddInputs]=useState([]);
   

    const addInputHandler= (inputValue)=>{
        setaddInputs(currentInputs=>[...addInputs,
          {id:Math.random().toString(),value2:inputValue}]);
         
        
      }
      useEffect(async() => {
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
      }, []);
  
  //<View><AddCircleOutline    /></View>
   //onPress={() => _changeIcon()}
    return (
    <ScrollView>
    <View  style={styles.formContainer}>
    <View style={styles.titleStyle}>
   
    </View>
    
    
    
    <AddWork
    onAddField={addInputHandler}
    />
    <View >
    <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={addInputs} 
      renderItem={itemData=> 
      <ItemAdded 
      id ={itemData.item.id}
      value={itemData.item.value2}
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

export default WorksConsultation;