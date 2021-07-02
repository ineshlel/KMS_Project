import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Dimensions, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
const { width } = Dimensions.get('window');

import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';


/*<TouchableOpacity  onPress={() => navigation.navigate('CoursesScreenEmpl',props.idpg)}>
       <View style={styles.input}>
          <Text style={styles.textStyle}>Cours</Text>
        </View>
      </TouchableOpacity>  */

const ProgramActions=props=>{
  const navigation = useNavigation();
  
 //   const route=props.program;
  //const [route,setRoute]=useState('programme');
    return ( 
      <View  style={styles.actionsContainers}>
        <TouchableOpacity  onPress={() => navigation.navigate('Inscription',props.idpg)}>
        <View style={styles.input}>
          <Text style={styles.textStyle}>Inscription</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  
        //onPress={() => navigation.navigate('InfoFormAdded',props.idpg)}
        onPress={() => navigation.navigate('HeaderTabsConsultation',{id:props.idpg,titre:props.name})}
        >
        <View style={styles.input}>
          <Text style={styles.textStyle}>Consultation</Text>
        </View>
        </TouchableOpacity>
       
      <TouchableOpacity  >
       <View style={styles.inputSup}>
          <Text style={styles.textStyle}>Supprimer</Text>
          <View style={{marginLeft:10}}>
          <AntDesign 
                    name="delete"
                    color="white"
                    size={20}
                />
          </View>
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
         inputSup:{
          flexDirection:'row',
          width:'60%',
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
        fontSize:18,
        color:'#fff'
      }
       
});

export default ProgramActions;