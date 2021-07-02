import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,Modal}from 'react-native';
import { COLORS } from '../constants';
import { RadioButton } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';


const SolutionInput=props=>{
  const [focus, setFocus] = useState(false); 
  const [checked, setChecked] = React.useState(false);
  const customStyle=focus?styles.inputFocus : styles.input

    return (
  
    <View  style={styles.inputContainer}>
   <View  style={styles.radioElement}>
    <TextInput  
      style={customStyle}
      onFocus={()=>setFocus(true)}
      placeholder={props.name}
   // onChangeText={}
    //value={}   
    />
    <RadioButton
        color={COLORS.orange}
        uncheckedColor={COLORS.purple}
        status={ checked === true ? 'checked' : 'unchecked' }
        onPress={() => setChecked(true)}
      />

      
    <View  style={{marginLeft:5}}>
    
   <AntDesign 
     name="delete"
     color={COLORS.orange}
      size={24}
     />
      </View>
    </View>
    </View>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginBottom:10,
        
    
      },
      input:{
        width:'60%',
        height:40,
        marginTop:5,
        borderRadius:14,
        //borderWidth:1,
        elevation:2,
         },

  inputFocus:{
    borderWidth:1,
    borderColor:COLORS.purple,
    width:'60%',
    height:40,
    marginTop:5,
    borderRadius:14,
  },
  radioElement:{
    flexDirection:'row',
    alignItems:'center'
  },

  
});
export default SolutionInput;