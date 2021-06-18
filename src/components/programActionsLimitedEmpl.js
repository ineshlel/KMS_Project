import React ,{useState}from 'react';

import {View,Text, StyleSheet ,Dimensions, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
const { width } = Dimensions.get('window');

import { useNavigation } from '@react-navigation/native';





const ProgramActionsLimitedEmpl=props=>{
  const navigation = useNavigation();
  
 // const route=props.program;
  //const [route,setRoute]=useState('programme');
    return ( 
      <View  style={styles.actionsContainers}>
        <TouchableOpacity  onPress={() => navigation.navigate('InfoFormEmpl',props.id_dm)}>
        <View style={styles.input}>
          <Text style={styles.textStyle}>Consultation</Text>
        </View>
        </TouchableOpacity>
       <TouchableOpacity  onPress={() => navigation.navigate('InscriptionParticipant',props.id_dm)}>
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

export default ProgramActionsLimitedEmpl;