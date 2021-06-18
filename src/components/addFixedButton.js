import React ,{useState}from 'react';

import {View,Text, StyleSheet , TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlightComponent } from 'react-native';
import { TouchableHighlight } from 'react-native';

/*<View style={styles.addButtonStyle}>
            <Text style={styles.textStyle}>+</Text>
          </View> */
// onPress={props.onAdd()}
//() =>navigation.navigate("Planification")
const AddFixedButton=props=>{
  const navigation = useNavigation();
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('Planification',props.idcour)}
       >
          <View style={styles.addButtonStyle}>
            <Text style={styles.textStyle}>+</Text>
          </View>
         
          </TouchableOpacity>
 );
};
const styles=StyleSheet.create({
    addButtonStyle: {
       // position: 'relative',
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
       //right: 40,
       left:250,
     
        bottom: 30,
        resizeMode: 'contain',
        backgroundColor:COLORS.purple,
        borderRadius:33
      },
      textStyle:{
        color:'#fff',
        fontSize:28,
       }
    
});
export default AddFixedButton;