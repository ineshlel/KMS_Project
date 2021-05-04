import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TouchableOpacity, ScrollView,Alert,FlatList}from 'react-native';
import AddFileButton from '../components/addFileButton';

import ConsigneItem from '../components/consigneItem';
import FilePicker from '../components/FilePicker';




//import Icon from 'react-native-vector-icons/Ionicons';





const ConsignesForma=({ navigation,props })=>{
   
    const[consignesList,setConsignesList]=useState([]);

    
    return (
    <ScrollView>
    <View  style={styles.formContainer}>
  

  
    <FilePicker/>

    <View >
    <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={consignesList} 
      renderItem={itemData=> 

       <ConsigneItem
       name='consigne'/>
       }>
     
       
      </FlatList>
    </View>
   
     
   
    
    
    
</View>
   </ScrollView> 
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        paddingTop:15,
        justifyContent:'flex-start'
        
    
      },
      button:{
        width:'90%',
        color:'blue',
        borderRadius:20,
        //marginLeft:60,
        marginTop:20,

      },
      textStyle:{
        fontSize:18,
        color:'grey',
        justifyContent:'center',
        textAlign:'center',
        
        },
        titleStyle:{
            marginBottom:10,
        },
        listStyle:{
          margin:5,
          
        },
     
});

export default ConsignesForma;