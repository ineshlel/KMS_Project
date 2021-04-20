import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import { COLORS } from '../constants';


const SolutionInput=props=>{
  const [focus, setFocus] = useState(false); 
  const customStyle=focus?styles.inputFocus : styles.input

    return (
  
    <View  style={styles.inputContainer}>
   
    <TextInput  
      style={customStyle}
      onFocus={()=>setFocus(true)}
      placeholder={props.name}
   // onChangeText={}
    //value={}
    />
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginBottom:10,
        
    
      },
      input:{
        width:'60%',
        height:40,
        marginTop:5,
        borderRadius:14,
        //borderWidth:1,
        elevation:2,
         },

  inputFocus:{
    borderWidth:1,
    borderColor:COLORS.purple,
    width:'60%',
    height:40,
    marginTop:5,
    borderRadius:14,
  },

  
});
export default SolutionInput;