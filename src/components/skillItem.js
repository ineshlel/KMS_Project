import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//
const SkillItem= props=>{
    const navigation = useNavigation();
    return (
  
       
        <View  style={styles.input}>
        <View style={styles.textContainer}> 
        <Text style={styles.textStyle}>{props.value}</Text>
        </View>
        </View>
   
 );
};
const styles=StyleSheet.create({
      input:{
        width:'60%',
        height:40,
        //marginLeft:30,
        borderRadius:14,
        marginTop:10,

        alignItems:'center',
        justifyContent:'center',
        elevation:2,
        //borderColor:COLORS.purple,
        backgroundColor:COLORS.orange,

       // borderWidth:1,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        marginBottom:5,
        flexDirection:'row',
         },
      textStyle:{
          fontSize:16,
          textAlign:'center',
          color:'white',
          fontFamily:"Cairo-SemiBold",
         },
      
      textContainer:{
          //marginRight:40,
          justifyContent:'center',
          alignItems:'center',
      },
   
     
});
export default SkillItem;