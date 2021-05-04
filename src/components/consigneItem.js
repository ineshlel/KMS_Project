import React ,{useState}from 'react';

import {View,Text, StyleSheet }from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../constants';
import CurrentDate from './currentDate';


const ConsigneItem=props=>{
   return (
   
    <View style={styles.itemContainer} >
        <View style={styles.container}>
         <View >
        <Text  style={styles.textName}>{props.name}</Text>
        </View>
        <View style={styles.downArrow}>
          <FontAwesome5 
                    name="file-download"
                    color={COLORS.blueClair}
                    size={26}
                />
        </View>
        </View>
        <CurrentDate/>
       </View>

    
 );
};
const styles=StyleSheet.create({
      container:{
         flex:1,
          flexDirection:'row',
      },
      itemContainer:{
        flexDirection:'column',
          marginHorizontal:30,
          marginVertical:5,
         // marginTop:40,
         //marginBottom:5,
          borderRadius:10,
          borderColor:COLORS.purple,
          borderWidth:1,
          padding:10,
          width:'80%',
         backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:0,height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
          elevation:2,
         
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
          color:COLORS.orange
      },
      downArrow:{
         // justifyContent:'center',
          //alignItems:'center',
          marginLeft:'92%',
          //marginVertical:25,
          marginBottom:18,
          marginTop:6,
          position:'absolute'


      },

 
});
export default ConsigneItem;