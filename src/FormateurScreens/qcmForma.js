import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';
import SolutionInput from '../components/solutionInput';
import { COLORS } from '../constants';


const QCMForma=props=>{


    return (
  
    <View  style={styles.inputContainer}>
    <Text  style={styles.textStyle}>{props.title}</Text>
    <Input  title='Num Question :'
      placeholder='Question...'/>
   <DescriptionInput   title='Consigne: '/>
    <View style={styles.solutionContainer}>
      <Text>Les solutions :</Text>
    <SolutionInput name='Solution1..'/>
    <SolutionInput name='Solution2..' />
    <SolutionInput name='Solution3..'/>
     </View>
     <ButtonKms title='Ajouter'/>
    
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        margin:10,
    },
    solutionContainer:{
   //  marginHorizontal:40,
   marginTop:10,

    },

  
});
export default QCMForma;