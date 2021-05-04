import React ,{useState,useCallback}from 'react';
import {View,Text, StyleSheet}from 'react-native';
import StaticInput from '../components/staticInput';






const FormateurToAccept=props=>{
   return (
     <View  style={styles.formContainer}>
     <StaticInput 
     name='Titre Programme'
     value='Programme Hancho'
     />
     <StaticInput 
     name='Période'
     value='04/06/2021-04/06/2021'
     />
     <StaticInput 
     name='Nom'
     value='Formateur 1'
     />
     <StaticInput 
     name='Prénom'
     value='Formateur 1'
     />
     <StaticInput 
     name='Date Demande'
     value='04/06/2021'
     />
       <View style={styles.buttonContainer}>
						<TouchableOpacity onPress={addFieldHandler} >
						   <View style={styles.addButton}>
                             <Text>Accepter</Text></View>
	                    </TouchableOpacity>
						<TouchableOpacity onPress={toggleModalVisibility} >
						   <View style={styles.addButton}>
                             <Text>Refuser</Text></View>
	                    </TouchableOpacity>
					
						</View>
      

   
   
    
    
      </View>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
       
        padding:20,
        //marginBottom:30
    
      },
      inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
     marginBottom:10
    
      },
      textStyle:{
        fontSize:12,
        
    },
    input:{
        width:'90%',borderColor:'grey',borderWidth:1,padding:3,marginTop:5,
        
      },
      addButton:{
        width:80,
            height:40,
            borderRadius:14,
            backgroundColor:COLORS.blueClair,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            marginHorizontal:12,
      
    
      },
      buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        paddingHorizontal:15,
        marginTop:20,
       
       },
    
     
});

export default FormateurToAccept;