import React ,{useState,useEffect}from 'react';

import {View,Text, StyleSheet , ScrollView,Alert,FlatList}from 'react-native';
import LinkItem from '../components/linkItem';
import { COLORS } from '../constants';
import ReunionForma from './addLinkForma';
//import apiConfig from '../api/config';
//import AsyncStorage from '@react-native-community/async-storage';




//import Icon from 'react-native-vector-icons/Ionicons';






const LinkReunionForma=({})=>{
 
    const[addInputs,setaddInputs]=useState([]);
    //const[works,setWorks]=useState([]);
   

    const addInputHandler= (inputValue)=>{
        setaddInputs(currentInputs=>[...addInputs,
          {id:Math.random().toString(),value2:inputValue}]);
         
        
      }

     /* 
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
      }, []);*/
  
  //<View><AddCircleOutline    /></View>
   //onPress={() => _changeIcon()}
    return (
    <ScrollView>
    <View  style={styles.formContainer}>
    <View style={styles.titleStyle}>
   
    </View>
    
    
    <ReunionForma
    onAddField={addInputHandler}
    />
  
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