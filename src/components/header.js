import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,FlatList}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../constants';


const HeaderProgram=props=>{
    

     
    return (
  
    <View style={styles.headerstyle} >
        <Text style={styles.headerTextstyle}>{props.title}</Text>
        
   
    </View>
 );
};
const styles=StyleSheet.create({

      headerstyle:{
         borderBottomWidth:1,
         borderColor:"#bbb",
         alignItems:'center',
         //justifyContent:'center',
         height:50,
         marginBottom:10,
         backgroundColor:COLORS.purple
      },
      headerTextstyle:{
          marginTop:30,
          fontSize:16,
          fontWeight:'bold',
      }
 
});
export default HeaderProgram;