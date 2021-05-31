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
      onChangeText={props.onChange}
      multiline={true}
    //value={}
    />
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:10
    
      },
      inputFocus:{
        width:'90%',borderColor:COLORS.purple,borderWidth:1,
        height:100,
        marginTop:5,
        borderRadius:14,
        elevation:1,
        textAlignVertical: 'top',

         },
         input:{
          width:'90%',
          height:100,
          marginTop:5,
          borderRadius:14,
          //borderWidth:1,
          elevation:2,
          textAlignVertical: 'top',
        
    },
      textStyle:{
        fontSize:18,
        fontFamily:"Cairo-Regular",
      },
  
});
export default DescriptionInput;