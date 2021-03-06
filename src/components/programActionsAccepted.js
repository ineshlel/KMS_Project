import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Dimensions, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
const { width } = Dimensions.get('window');

import { useNavigation } from '@react-navigation/native';



const ProgramActionsAccepted=props=>{
  console.log('µµµµµµµµµµµµµ',props.idpg)
  //HeaderTabsForma
  const navigation = useNavigation();
    return ( 
      <View  style={styles.actionsContainers}>
        <TouchableOpacity  
         onPress={() => navigation.navigate('HeaderTabsForma',props.idpg)}
       
        >
        <View style={styles.input}>
          <Text style={styles.textStyle}>Consultation</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  
       onPress={() => navigation.navigate('List des cours',props.idpg)}
        >
        <View style={styles.input}>
          <Text style={styles.textStyle}>Cours</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={() => navigation.navigate('TwoHeaderTabFormateur',props.idpg)}
         
         >
        <View style={styles.input}>
          <Text style={styles.textStyle}>Inscription</Text>
        </View>
        </TouchableOpacity>

      </View>
 );
};
const styles=StyleSheet.create({
    actionsContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        //marginBottom:10
      },
      input:{
        width:'60%',
        height:40,
        marginTop:5,
        borderRadius:14,
        //borderWidth:1,
        elevation:2,
        backgroundColor:COLORS.blueClair,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
         },
      textStyle:{
        fontSize:18,
        color:'#fff'
      }
       
});

export default ProgramActionsAccepted;