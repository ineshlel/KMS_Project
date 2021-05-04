import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, ScrollView,Alert,FlatList}from 'react-native';
import { COLORS } from '../constants';




//import Icon from 'react-native-vector-icons/Ionicons';
import AddWork from '../components/addWork';
import ItemAddedEmpl from '../components/itemAddedEmpl';





const ListOfWorksEmpl=()=>{
 
    const[works,setworks]=useState([
        {
            id:1,
            value:'travail 1'
        },
        {
            id:2,
            value:'travail 2'
        },
        {
            id:3,
            value:'travail 3'
        },

    ]);

    
  
  //<View><AddCircleOutline    /></View>
   //onPress={() => _changeIcon()}
   //<ItemAdded value='Travail 1 by Resp'/>
    return (
    <ScrollView>
    <View  style={styles.formContainer}>
    <View style={styles.titleStyle}>
    </View>

    
    <View >
    <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={works} 
      renderItem={itemData=> 
      <ItemAddedEmpl
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

export default ListOfWorksEmpl;