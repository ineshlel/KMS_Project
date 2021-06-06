import React ,{useState}from 'react';

import {View,Text, StyleSheet , TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//
const ItemAdded= props=>{
    const navigation = useNavigation();
    
    return (
  
    <TouchableOpacity onPress={() => navigation.navigate('TwoHeaderTab',props.id_tr)}  >
       
        <View  style={styles.input}>
        <View style={styles.textContainer}> 
        <Text>{props.value}</Text>
        </View>
        <View>
        <FontAwesome5
         style={styles.downArrow}
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
        width:'75%',borderColor:'grey',
        height:45,
        marginLeft:30,
        borderRadius:10,
        marginTop:30,

        alignItems:'center',
        justifyContent:'center',
        elevation:2,
        borderColor:COLORS.purple,
        backgroundColor:'white',

        borderWidth:1,
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
      textContainer:{
          //marginRight:40,
          justifyContent:'center',
          alignItems:'center',
      },
      downArrow:{
      
        // justifyContent:'center',
        // alignItems:'center',
        
       // marginTop:2,
       // paddingBottom:10,
      // marginVertical:8,
         position:'absolute',
         marginLeft:60,
        // paddingBottom:10,
       // marginBottom:10,
      // marginLeft:'92%',
      // marginVertical:10,
      
       

     },
     
});
export default ItemAdded;