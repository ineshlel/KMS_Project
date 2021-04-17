import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';

//
const ItemAdded= props=>{
    return (
  
    <TouchableOpacity  >
       
        <View  style={styles.input}>
        <Text>{props.value}</Text>
        </View>
    </TouchableOpacity>
 );
};
const styles=StyleSheet.create({
      input:{
        width:'70%',borderColor:'grey',
        height:45,
        marginLeft:30,
        borderRadius:12,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        elevation:2,
       // border:COLORS.purple,
        //border
        borderWidth:0,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        marginBottom:5,
        
        
      },
      textStyle:{
          fontSize:18,
          textAlign:'center',
         
      },
     
});
export default ItemAdded;