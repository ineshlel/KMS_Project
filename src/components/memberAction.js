import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Dimensions, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
const { width } = Dimensions.get('window');

import { useNavigation } from '@react-navigation/native';





const MemberAction=props=>{
  const navigation = useNavigation();
  
 //   const route=props.program;
  //const [route,setRoute]=useState('programme');
    return ( 
      <View  style={styles.actionsContainers}>
        <TouchableOpacity  onPress={() => navigation.navigate('liste des participants',props.iddm)}>
        <View style={styles.input}>
          <Text style={styles.textStyle}>liste des participants</Text>
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
        width:'50%',borderColor:COLORS.orange,borderWidth:1,
        height:40,
        marginTop:5,
        borderRadius:14,
        //borderWidth:1,
        elevation:2,
        backgroundColor:COLORS.orange,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
         },
      
      textStyle:{
        fontSize:18,fontFamily:'Cairo-SemiBold',
        color:'#fff'
      }
       
});

export default MemberAction;