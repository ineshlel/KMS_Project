import React ,{useState,useCallback}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal,Slider}from 'react-native';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';






const InfoForm=props=>{


  const [time,setTime]=useState();
   
    return (
     <View  style={styles.formContainer}>
      <Input title='Titre :'/>
      <Input title='Durée :'/>
      <DescriptionInput   title='Description: '/>
      

   
      <ButtonKms  title='Valider'/>
    
    
      </View>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       
        padding:20,
        //marginBottom:30
    
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

export default InfoForm;