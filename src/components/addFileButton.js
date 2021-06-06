import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AddFileButton=props=>{
  
    return (
						<View style={styles.addButton}>
                        <Ionicons
                        name="attach"
                        color="black"
                        size={20}
                      />
                     <Text>Ajouter</Text></View>
                 

 );
};
const styles=StyleSheet.create({
    addButton:{
        width:75,
        height:35,
        borderRadius:14,
        backgroundColor:COLORS.blueClair,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',

    },
    
});
export default AddFileButton;