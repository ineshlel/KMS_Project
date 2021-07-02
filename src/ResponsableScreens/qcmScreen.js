import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,FlatList}from 'react-native';
import { ScrollView, TouchableOpacity, Alert} from 'react-native-gesture-handler';
import AddFileButton from '../components/addFileButton';
import ButtonKms from '../components/buttonV';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';
import SolutionInput from '../components/solutionInput';
import { COLORS } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../api/config';
import jwt_decode from "jwt-decode";
import { SafeAreaView } from 'react-native-safe-area-context';


//   <SolutionInput name='Solution2..' />


const QCMScreen=props=>{
  const[addInputs,setaddInputs]=useState([]);
  const [checked, setChecked] = React.useState(false);
  const[question,setQuestion]=useState();
    const addInputHandler= (inputValue)=>{
        setaddInputs(currentInputs=>[...addInputs,
          {id:Math.random().toString(),value2:inputValue}]);
          }

  //const[idQuestion,setIdQuestion]=useState(0);
  var idQuestion;
   const addQuestionHandler=async()=>{

            const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
            const programID=await AsyncStorage.getItem('programID');
            console.log(programID);
            console.log('*************');
            var decoded = jwt_decode(DEMO_TOKEN);
            console.log(decoded.user_id);
            var dataToSend = {
              titre:question,
              cree_par:JSON.parse(decoded.user_id),
              programme:programID,
            };
            var formBody = [];
            for (var key in dataToSend) {
              var encodedKey = encodeURIComponent(key);
              var encodedValue = encodeURIComponent(dataToSend[key]);
              formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
          
            //console.log(await AsyncStorage.getItem('userToken'));
            //console.log('****************');
            //console.log(token);
            
            fetch(apiConfig.url+'/api/questions/', {
              method: 'POST',
              body: formBody,
              headers: {
              
                'Authorization':'Bearer ' + DEMO_TOKEN,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            
              },
              })
              .then((response) => response.json())
              .then((responseJson) => {
                  console.log(responseJson);
                   idQuestion=responseJson.id;
                  //setIdQuestion(responseJson.id);
                  console.log(idQuestion);
                  console.log('//////////////////////');
              
              })
              .catch((error) => {
               console.error(error);
              });
        
          } 
          const handleReponse=async () => {
            addQuestionHandler();
            const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
            const programID=await AsyncStorage.getItem('programID');
            addInputs.forEach(itemData=> {
              console.log('****** ITEM',itemData);
            var dataToSend = {
              option: itemData.name,
              isvalid:true,
              question:idQuestion
            };
            var formBody = [];
            for (var key in dataToSend) {
              var encodedKey = encodeURIComponent(key);
              var encodedValue = encodeURIComponent(dataToSend[key]);
              formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            
          fetch(apiConfig.url+'/api/reponses/', {
            method: 'POST',
            body:formBody,
            headers: {
          
              'Authorization':'Bearer ' + DEMO_TOKEN,
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        
            },
          })
              .then((response) => response.json())
              .then((responseJson) => {
                
                //setK_OPTIONS(responseJson);
                console.log(responseJson);
                console.log("--------------------");
                Alert.alert("Le question 1 a été ajouté");
              })
              .catch((error) => {
                console.error(error);
              });
            }
            )
           
          }


    return (
  
    <ScrollView  style={styles.inputContainer}>

    <Text  style={styles.textStyle}>{props.title}</Text>
    <DescriptionInput   title='Question: '
      onChange={(question) => setQuestion(question)}
    />
 
    <View style={styles.solutionContainer}>
    
    <View  style={styles.addSolutionContainer}>
    <Text style={{fontSize:18,
        fontFamily:"Cairo-Regular",}}>Les solutions :</Text>
  
    <TouchableOpacity onPress={addInputHandler}>
    <View style={styles.addButtonStyle}>
            <Text style={styles.textStyle}>+</Text>
    </View>
    </TouchableOpacity>
  
    </View>
    
    <SafeAreaView style={{flex:1}}>
    <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={addInputs} 
      renderItem={itemData=> 
      <SolutionInput 
    
      id ={itemData.item.id}
      name={itemData.item.value2}
      />
      }>
       
    </FlatList>
    </SafeAreaView>
    
 
     </View>
     <View style={{marginTop:20}}>
     <ButtonKms title='Ajouter'
     onValidate= {handleReponse}/>
    </View>
    </ScrollView>
 );
};
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
       // margin:10,
       padding:15,
        backgroundColor:'#fff'
    },
    solutionContainer:{
   //  marginHorizontal:40,
   marginTop:10,
   

    },
    addSolutionContainer:{
      flexDirection:'row',
    },
    addButtonStyle: {
     //flex:1,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:COLORS.purple,
      borderRadius:14,
      //marginRight:10,
      marginLeft:90,
      marginTop:10,
      marginBottom:5,
    },
    textStyle:{
      color:'#fff',
     }

  
});
export default QCMScreen;