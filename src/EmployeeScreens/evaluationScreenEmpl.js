import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Image,TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const EvaluationEmpl=props=>{
  
  const navigation = useNavigation();

     
    return (
        <View style={styles.container}>
        <TouchableOpacity   onPress={() => navigation.navigate('ListOfWorksEmpl',props.id_pg)}>
       
       <View  style={styles.input}>
       <Text style={styles.textStyle}>Travaux</Text>
       <Image
              source={require('../assets/images/testing.png')}
              style={{
                height: 40,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
            />
        </View>
        </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('PLayQuiz')}>
      <View  style={styles.input}>
      <Text style={styles.textStyle}>QCM</Text>
      <Image
              source={require('../assets/images/exam.png')}
              style={{
                height: 40,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
            />
      </View>
       </TouchableOpacity>
        </View>
     
 );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        //paddingTop:200,
       paddingHorizontal:20,
       marginTop:150,


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
        flexDirection:'column',
        
        
      },
      textStyle:{
          fontSize:20,
          textAlign:'center',
          color:COLORS.purple,
          fontFamily:"Cairo-SemiBold"
         
      },
     
});


export default EvaluationEmpl;