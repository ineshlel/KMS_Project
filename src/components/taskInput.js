import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';


const TaskInput=props=>{
    return (
  
    <View  style={styles.inputContainer}>
    <Text  style={styles.textStyle}>{props.title}</Text>
    <TextInput    style={styles.input}
   // onChangeText={}
    //value={}
    />
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:30,
     },
      input:{
        width:'60%',borderColor:'grey',borderWidth:1,
        height:38,
        marginLeft:30,
        borderRadius:12,
        
        
      },
      textStyle:{
          fontSize:18,
          textAlign:'center',
         
      },
     
});
export default TaskInput;