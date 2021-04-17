import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';

const EvaluationScreen=props=>{

     
    return (
        <View style={styles.container}>
        <TouchableOpacity>
       
       <View  style={styles.input}>
       <Text style={styles.textStyle}>Travaux</Text>
        </View>
        </TouchableOpacity>
      <TouchableOpacity>
      <View  style={styles.input}>
      <Text style={styles.textStyle}>QCM</Text>
      </View>
       </TouchableOpacity>
        </View>
     
 );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        paddingTop:180,
       paddingHorizontal:20,


    },
      input:{
        width:'70%',borderColor:COLORS.green,borderWidth:2,
        height:100,
        marginLeft:30,
        borderRadius:15,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.green,
        
        
        
      },
      textStyle:{
          fontSize:18,
          textAlign:'center',
         
      },
     
});
export default EvaluationScreen;