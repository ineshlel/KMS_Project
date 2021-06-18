import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput}from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../constants';


const ProgramItemAcceptedEmpl=props=>{

     return (
  
    <View style={styles.itemContainer} >
        <View style={styles.membership}>
         <AntDesign
                    name="team"
                    color={COLORS.orange}
                    size={28}
                />
        </View>
        <View >
        <Text  style={styles.textName}>{props.name}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text  style={styles.textCountry}>{props.dd}</Text>
        <Text  style={styles.textCountry}>{props.df}</Text>
        </View>
        </View>
        <View style={styles.downArrow}>
          <FontAwesome5 
                    name="chevron-down"
                    color={COLORS.blueClair}
                    size={22}
                />
        </View>
        
        
   
    </View>
 );
};
const styles=StyleSheet.create({

      itemContainer:{
          flexDirection:'row',
          marginHorizontal:20,
         //
         marginVertical:5,
        // marginTop:40,
        // marginBottom:5,
          borderRadius:10,
          borderColor:'#ddd',
          borderWidth:1,
          padding:10,
          width:'85%',
         backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:0,height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
         elevation:12,
         
          },
       itemStyle:{
           flexDirection:'row',
       },
      textName:{
          fontSize:15,
          fontWeight:'bold',
          marginBottom:5,
      },
      textCountry:{
          color:COLORS.purple,
          //marginLeft:40,
          fontSize:12,
      },
      downArrow:{
         // justifyContent:'center',
          //alignItems:'center',
          marginLeft:'92%',
          marginVertical:20,
          position:'absolute'
         },
      membership:{
          justifyContent:'center',
          alignItems:'center',
          marginRight:8,
      },

 
});
export default ProgramItemAcceptedEmpl;