import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';
import SolutionInput from '../components/solutionInput';
import { COLORS } from '../constants';


const QCMScreen=props=>{


    return (
  
    <View  style={styles.inputContainer}>
    <Text  style={styles.textStyle}>{props.title}</Text>
    <Input  title='Num Question :'
      placeholder='Question...'/>
    <DescriptionInput tiltle='Consigne'
      placeholder='Consigne'
    />
    <SolutionInput/>
    
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginBottom:10,
    }
  
});
export default QCMScreen;