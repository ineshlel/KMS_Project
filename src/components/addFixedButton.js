import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

// onPress={props.onAdd()}
//() =>navigation.navigate("Planification")
const AddFixedButton=props=>{
  const navigation = useNavigation();
    return (
        <TouchableOpacity  onPress={ props.onAdd}>
          
          <View style={styles.addButtonStyle}>
            <Text style={styles.textStyle}>+</Text>
          </View>
          </TouchableOpacity>
      
     
 );
};
const styles=StyleSheet.create({
    addButtonStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
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