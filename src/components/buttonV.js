import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import { COLORS } from '../constants';


const ButtonKms=props=>{
    return (
  
        <View  style={styles.button}>
            <Text style={styles.textStyle}>{props.title}</Text>
            
        </View>
 );
};
const styles=StyleSheet.create({
    button:{
        width:'90%',
        height:40,
         borderRadius:15,
        //marginLeft:60,
        marginTop:30,
        backgroundColor:COLORS.blueClair,
        justifyContent:'center',
        alignItems:'center',
        //position: 'absolute',
        //top: 100,
        //paddingTop: 5,
        
    },
    textStyle:{
        fontSize:18,
        color:'#fff',
        fontFamily:"Cairo-Bold",
        

    },
    
});
export default ButtonKms;