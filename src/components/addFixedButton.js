import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, TouchableOpacity}from 'react-native';


const AddFixedButton=props=>{
    return (
  
        <TouchableOpacity  onPress={props.onAdd()}>
          <View style={styles.addButtonStyle}>
            <Text style={styles.textStyle}>+</Text>
          </View>
        </TouchableOpacity>
 );
};
const styles=StyleSheet.create({
    addButtonStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,
      
        bottom: 70,
       // resizeMode: 'contain',
        backgroundColor:'#858FE8',
        borderRadius:33
      },
      textStyle:{
        color:'#fff',
      
      }
    
});
export default AddFixedButton;