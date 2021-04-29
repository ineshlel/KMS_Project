import React ,{useState}from 'react';
import { ScrollView } from 'react-native';

import {View,Text, StyleSheet}from 'react-native';
import ButtonKms from '../components/buttonV';
import Input from '../components/Input';

const InscriptionEmployee=props=>{
   
    return (
     <ScrollView >
      <View  style={styles.formContainer}>
      <Input   title='Nom de la demande:'/>
      <Input   title='Nom et Prénom:'/>
      <Input   title='Téléphone:'/>
      <Input   title='E-mail:'/>
      <Input   title='Adresse:'/>
      <Input   title='Poste:'/>
      <Input   title="Entreprise:"/>
      <ButtonKms title="S'inscrire"/>
       </View>
     </ScrollView>
    
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

export default InscriptionEmployee;