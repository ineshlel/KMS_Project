import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import { COLORS } from '../constants';


const DescriptionInput=props=>{
  const [focus, setFocus] = useState(false); 
  const customStyle=focus?styles.inputFocus : styles.input
    return (
  
    <View  style={styles.inputContainer}>
    <Text  style={styles.textStyle}>{props.title}</Text>
    <TextInput    style={customStyle}
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
        marginBottom:10
    
      },
      inputFocus:{
        width:'90%',borderColor:COLORS.purple,borderWidth:1,
        height:100,
        marginTop:5,
        borderRadius:14,
        elevation:1
         },
         input:{
          width:'90%',
          height:100,
          marginTop:5,
          borderRadius:14,
          //borderWidth:1,
          elevation:2,
    },
      textStyle:{
          fontSize:15,

         
      },
  
});
export default DescriptionInput;