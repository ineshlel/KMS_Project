import React ,{useState}from 'react';

import {View,Text, StyleSheet , TouchableOpacity}from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';




/*   <MaterialIcons 
                        name="navigate-next"
                        color={COLORS.purple}
                        size={28}
                    />
                    
                flexDirection:'row',
          marginHorizontal:20,
          marginVertical:5,
         // marginTop:40,
         //marginBottom:5,
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
          elevation:8,     
                    
                    */
const ItemAdded= props=>{
    const navigation = useNavigation();
    console.log("--------------",props.value);
    console.log(props.valuepond);
    console.log('DATEDEBUT',props.valuedd);
    console.log('DATEFIN',props.valuedf);
    return (
     <View  style={{flexDirection:"row"}}>
    <TouchableOpacity onPress={() => navigation.navigate('TwoHeaderTab',props.id_tr)}  >
       
        <View  style={styles.input}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <Text style={{fontFamily:'Cairo-SemiBold',fontSize:18,color:COLORS.purple}}>{props.value}</Text>
       <View style={{marginLeft:8}}>
       <Text style={{borderBottomWidth:2,borderColor:COLORS.orange,
        fontFamily:'Cairo-SemiBold',fontSize:16,color:COLORS.orange,
        }} >{props.valuepond}</Text>
       </View>
       </View>
        
        
        <Text style={styles.textDate}>Date début: {props.valuedd}</Text>
        <Text style={styles.textDate} >Date limite: {props.valuedf}</Text>
       </View>
    </TouchableOpacity>
    <View style={{flexDirection:'column', }}>
             <View  style={{marginTop:15,marginBottom:18,}}>
              <AntDesign 
                    name="delete"
                    color={COLORS.orange}
                    size={26}
                />
                </View>
                <FontAwesome5 
                    name="edit"
                    color={COLORS.purple}
                    size={25}
                />

    </View>
    </View>
 );
};
const styles=StyleSheet.create({
      input:{
        flexDirection:'column',
      // marginHorizontal:30,
      marginRight:30,
        marginVertical:5,
       // marginTop:40,
       //marginBottom:5,
        borderRadius:10,
        borderColor:COLORS.purple,
        borderWidth:1,
        padding:10,
        //width:'100%',
        width:260,
       backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:4,
     
         },
      textStyle:{
          fontSize:18,
          textAlign:'center',
          flexDirection:'row',
          marginHorizontal:20,
          marginVertical:5,
         // marginTop:40,
         //marginBottom:5,
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
          elevation:8,
         },
      textContainer:{
          //marginRight:40,
          //justifyContent:'center',
          //alignItems:'center',
        
      },
      downArrow:{
      
        // justifyContent:'center',
        // alignItems:'center',
        
       // marginTop:2,
       // paddingBottom:10,
      // marginVertical:8,
         position:'absolute',
         marginLeft:60,
    },
    textDate:{
        color:COLORS.orange,
    }
     
});
export default ItemAdded;