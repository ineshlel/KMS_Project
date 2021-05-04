import React ,{useState,useCallback}from 'react';

import {View,Text, StyleSheet ,}from 'react-native';
import StaticInput from '../components/staticInput';

const InfoFormEmpl=props=>{


  const [time,setTime]=useState();
   
    return (
     <View  style={styles.formContainer}>
    <StaticInput name='Titre :'
    value='Programme Hancho'
    />
    <StaticInput name='Durée :'
    value='20 Heures'
    />
      <StaticInput name='Date Début:'
    value='20/04/2021'
    />
      <StaticInput name='Date Fin:'
    value='20/04/2021'
    />
    <StaticInput name='Nom Formateur:'
    value='Bilel Karray'
    />
    <StaticInput name='Description:'
    value='Ce programme vise à developper les compétances du management'
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
export default InfoFormEmpl;