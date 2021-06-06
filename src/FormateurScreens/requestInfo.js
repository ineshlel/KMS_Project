import React ,{useState,useCallback}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal,Slider}from 'react-native';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';

import { COLORS } from '../constants';
import StaticInput from '../components/staticInput';





const RequestInfo=({props,route})=>{
  const { nameF, ddd,dfd,id_dm,id_pg,id_f,st } = route.params;

   
    return (
     <View  style={styles.formContainer}>
    <StaticInput name='Date Demande :'
    //value='Programme Hancho'
    />

      <StaticInput name='Date Début:'
    value={ddd}
    />
      <StaticInput name='Date Fin:'
    value={dfd}
    />
       <StaticInput name='Statut:'
    value={st}
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