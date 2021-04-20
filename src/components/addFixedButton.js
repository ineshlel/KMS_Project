import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';

// onPress={props.onAdd()}
const AddFixedButton=props=>{
    return (
  
        <TouchableOpacity >
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
        backgroundColor:COLORS.purple,
        borderRadius:33
      },
      textStyle:{
        color:'#fff',
      
      }
    
});
export default AddFixedButton;