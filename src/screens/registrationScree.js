import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal,ScrollView}from 'react-native';
import HeaderProgram from '../components/header';
import ThreeTabRegistration from '../components/threeTabsRegistration';

import { COLORS } from '../constants';







const RegistrationResponsable=props=>{
   
    return (
     <View  style={styles.formContainer}>
       <HeaderProgram/>
      <View style={styles.input}>
    
        <Text style={styles.textStyle}>Inscription</Text>
            
      </View>
      <View>
        <ThreeTabRegistration/>
     
        
      </View>

       
      </View>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        flex: 1, 
        
    
    
      },
      input:{
        width:'50%',borderColor:COLORS.green,borderWidth:1,
        height:40,
        margin:10,
        borderRadius:14,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.green,
        marginLeft:25,
       
        
        
      },
      textStyle:{
        color:'#fff'
       
    },
 
    
     
});

export default RegistrationResponsable;