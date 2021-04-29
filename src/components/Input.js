import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import { COLORS } from '../constants';


const Input=props=>{
  const [focus, setFocus] = useState(false); 
  const customStyle=focus?styles.inputFocus : styles.input

    return (
  
    <View  style={styles.inputContainer}>
    <Text  style={styles.textStyle}>{props.title}</Text>
    <TextInput  
      style={customStyle}
      onFocus={()=>setFocus(true)}
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
        width:'90%',
        height:40,
        marginTop:5,
        borderRadius:10,
        //borderWidth:1,
        elevation:2,
  },

  inputFocus:{
    borderWidth:1,
    borderColor:COLORS.purple,
    width:'90%',
    height:40,
    marginTop:5,
    borderRadius:10,
  },
      textStyle:{
          fontSize:18,
          fontFamily:"Cairo-Regular",
         
      },
  
});
export default Input;