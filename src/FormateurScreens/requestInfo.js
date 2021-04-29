import React ,{useState,useCallback}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal,Slider}from 'react-native';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';

import { COLORS } from '../constants';
import StaticInput from '../components/staticInput';





const RequestInfo=({props,navigation})=>{


  const [time,setTime]=useState();
   
    return (
     <View  style={styles.formContainer}>
    <StaticInput name='Titre :'
    value='Programme Hancho'
    />
    <StaticInput name='Durée :'
    value='20H'
    />
      <StaticInput name='Date Début:'
    value='20/04/2021'
    />
      <StaticInput name='Date Fin:'
    value='20/04/2021'
    />
    <StaticInput name='Date Demande:'
    value='20/04/2021'
    />
     </View>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       
       padding:10,
        //marginBottom:30
       // marginRight:20,
    
      },
      inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
     marginBottom:10
    
      },
      textStyle:{
        fontSize:12,
        
    },
    input:{
        width:'90%',borderColor:'grey',borderWidth:1,padding:3,marginTop:5,
        
      },
    
     
});
export default RequestInfo;