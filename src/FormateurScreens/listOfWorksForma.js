import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, ScrollView,Alert,FlatList}from 'react-native';
import { COLORS } from '../constants';




//import Icon from 'react-native-vector-icons/Ionicons';
import AddWork from '../components/addWork';
import ItemAdded from '../components/itemAdded';




const ListOfWorksForma=()=>{
 
    const[addInputs,setaddInputs]=useState([]);

    const addInputHandler= (inputValue)=>{
        setaddInputs(currentInputs=>[...addInputs,
          {id:Math.random().toString(),value2:inputValue}]);
         
        
      }
  
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
    <ItemAdded value='Travail 1 by Resp'/>
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

export default ListOfWorksForma;