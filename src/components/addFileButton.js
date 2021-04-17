import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddFileButton=props=>{
    return (
  
        <TouchableOpacity >
						<View style={styles.addButton}>
                        <Ionicons
                        name="attach"
                        color="black"
                        size={20}
                      />
                     <Text>Ajouter</Text></View>
	    </TouchableOpacity>
 );
};
const styles=StyleSheet.create({
    addButton:{
        width:75,
        height:35,
        borderRadius:14,
        backgroundColor:COLORS.orange,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',

    },
    
});
export default AddFileButton;