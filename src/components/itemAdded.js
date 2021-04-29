import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal, TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//
const ItemAdded= props=>{
    const navigation = useNavigation();
    return (
  
    <TouchableOpacity onPress={() => navigation.navigate('TwoHeaderTab')}  >
       
        <View  style={styles.input}>
        <Text>{props.value}</Text>
         <View>
        <FontAwesome5
         //style={styles.downArrow}
                    name="chevron-right"
                    color={COLORS.purple}
                    size={20}
                />
         </View>
        </View>
    </TouchableOpacity>
 );
};
const styles=StyleSheet.create({
      input:{
        width:'80%',borderColor:'grey',
        height:45,
        marginLeft:30,
        borderRadius:12,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        elevation:2,
       // border:COLORS.purple,
        //border
        borderWidth:0,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        marginBottom:5,
        flexDirection:'row',
        
        
      },
      textStyle:{
          fontSize:18,
          textAlign:'center',
        
         
      },
      downArrow:{
      
         justifyContent:'center',
         alignItems:'center',
        //marginLeft:'10%',
        // marginBottom:7,
         //position:'absolute',
         marginRight:60,
        // paddingBottom:10,
        marginBottom:10,
       

     },
     
});
export default ItemAdded;