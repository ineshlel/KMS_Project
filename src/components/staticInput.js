import React ,{useState}from 'react';

import {View,Text, StyleSheet ,Dimensions}from 'react-native';
import { COLORS } from '../constants';
const{width,height}=Dimensions.get("window");


const StaticInput=props=>{

    return (
  
    <View  style={styles.inputContainer}>
   <View style={styles.nameStyle} ><Text  style={styles.textStyle1}>{props.name}</Text></View> 
    <View style={styles.valueStyle}><Text  style={styles.textStyle2}>{props.value}</Text></View>
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        //justifyContent:'space-between',
        marginTop:10,
       // marginLeft:10,
      },
      nameStyle:{
       width:0.4*width,
      },
      valueStyle:{
       width:0.5*width,
     },
      textStyle1:{
          fontSize:18,
          fontFamily:"Cairo-Regular",
         },
         textStyle2:{
            fontSize:18,
            fontFamily:"Cairo-Light",
           },
  
});
export default StaticInput;