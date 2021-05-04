import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const EvaluationForma=({props})=>{

  const navigation = useNavigation();

     
    return (
        <View style={styles.container}>
        <TouchableOpacity   
        onPress={() => navigation.navigate('ListOfWorksForma')}
        >
       
       <View  style={styles.input}>
       <Text style={styles.textStyle}>Travaux</Text>
        </View>
        </TouchableOpacity>
      <TouchableOpacity 
       onPress={() => navigation.navigate("PLayQuizForma")}
       >
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
       paddingTop:200,
       paddingHorizontal:20,


    },
      input:{
        width:'70%',
        //borderColor:COLORS.purple,borderWidth:2,
        height:100,
        marginLeft:30,
        borderRadius:15,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.grey,
        elevation:4,
        
        
      },
      textStyle:{
          fontSize:18,
          textAlign:'center',
          color:COLORS.purple
         
      },
     
});
export default EvaluationForma;