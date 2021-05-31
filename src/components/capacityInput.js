import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import { COLORS } from '../constants';
import { Keyboard } from 'react-native';


const CapacityInput=props=>{
  const [focus, setFocus] = useState(false); 
  const customStyle=focus?styles.inputFocus : styles.input

    return (
  
    <View  style={styles.inputContainer}>
    <Text  style={styles.textStyle}>{props.title}</Text>
    <View style={styles.InputsContainer}>
    <TextInput  
     keyboardType='numeric'
      style={customStyle}
      placeholder="min"
      onFocus={()=>setFocus(true)}
    onChangeText={props.onChange}
    autoCapitalize="sentences"
    onSubmitEditing={props.onsubmit}
    //blurOnSubmit={false}
    //value={}
    />
    <TextInput 
     keyboardType='numeric'
      style={customStyle}
      placeholder="max"
      onFocus={()=>setFocus(true)}
    onChangeText={props.onChange2}
    autoCapitalize="sentences"
    onSubmitEditing={props.onsubmit}
    //blurOnSubmit={false}
    //value={}
    />
    </View>
    
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginBottom:10,
        
    
      },
      InputsContainer:{
          flexDirection:'row',
          
      },
      input:{
        width:80,
        height:40,
        marginTop:5,
        //margin:5,
        marginRight:90,
        borderRadius:10,
        //borderWidth:1,
        elevation:2,
  },

  inputFocus:{
    borderWidth:1,
    borderColor:COLORS.purple,
    width:80,
    height:40,
    marginTop:5,
    marginRight:90,
    borderRadius:10,
  },
      textStyle:{
          fontSize:18,
          fontFamily:"Cairo-Regular",
         
      },
  
});
export default CapacityInput;