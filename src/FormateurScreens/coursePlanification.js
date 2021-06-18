import React ,{useState}from 'react';

import {View,Text, StyleSheet ,Alert,SafeAreaView,TouchableOpacity}from 'react-native';
import DateInput from '../components/dateInput';
import DescriptionInput from '../components/descriptionInput';
import Input from '../components/Input';
import DoubleSlider from '../components/slider';
//import DatePicker from 'react-native-datepicker';
import { COLORS } from '../constants';
import StaticInput from '../components/staticInput';
import TimePickerInput from '../components/timepicker';
import { ScrollView } from 'react-native';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

import DatePicker from 'react-native-date-picker'
/* <SafeAreaView style={styles.dateContainer}>
        <View  style={{marginRight:60,marginTop:3}}>
        <Text style={styles.textStyle2}>Date début :</Text>
        </View>
      <DatePicker
          date={dateC} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="choisir date"
          format="YYYY-MM-DD"
          minDate="1960-01-01"
          maxDate="2040-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
         // openToYearSelection={true}
          customStyles={{
            dateIcon: {
              //display: 'none',
             // position: 'absolute',
              right: 0,
              left:6,
              top: 4,
              marginLeft: 0,
              tintColor:COLORS.blueClair,
             height:35,
              },
            dateInput: {
           
                //width:'90%',
                height:40,
                marginTop:5,
                borderRadius:10,
                //borderWidth:1,
                elevation:1,
                
              
              
            },
          }}
          onDateChange={(dateC) => {
            setDateC(dateC);
            console.log(dateC);
          }}
        />
        </SafeAreaView>*/
const CoursePlanification=props=>{
  const[course,setCourse]=useState();
  const[desc,setDesc]=useState();
  const[dateC,setDateC]=useState();
  const [time1, setTime1] = useState(new Date())
  const [time2, setTime2] = useState(new Date())

  var res1,res2,res3;
  const handleAddCourseteButton=async()=>{
    //setLoading(true);
  var dataToSend = {
    titre: course,
    date:"2021-06-27",
    description:desc,
    startHour:"08:00:00",
    endHour:"12:00:00",
    programme:props.route.params,
    partage_par:11,
  };
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
  console.log(DEMO_TOKEN);
  //console.log(await AsyncStorage.getItem('userToken'));
  console.log("-------------routeparams",props.route.params);
  console.log('****************');


  fetch(apiConfig.url+`/api/cours_programme?programme=${props.route.params}`, {
      method: 'POST',
      body: formBody,
      headers: {
    
        'Authorization':'Bearer ' + DEMO_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        //setLoading(false);
        
        console.log('newCourse',responseJson);
       // AsyncStorage.setItem('programID',JSON.stringify(responseJson.id));
        Alert.alert("Le cours  "+responseJson.titre+" a été ajouté");
    
       console.log('//////////////////////');
      
      })
      .catch((error) => {
        //Hide Loader
        //setLoading(false);
        console.error(error);
      });
  


}

    return (
  
    <ScrollView  style={styles.container}>
       <Input title='Titre Cours :'
       onChange={(course) => setCourse(course)}
       />
     
     <DescriptionInput
        title='Description :'
        onChange={(desc) => setDesc(desc)}
        />
     
     
      <StaticInput  name='Jour et horaire :'/>
 
      <View style={styles.containertime}>
   
   <DatePicker
   
  textColor={COLORS.purple}
  format="YYYY-MM-DD"
   mode="datetime"
   date={time1}
   is24hourSource="locale"
   locale='fr'
   onDateChange=
   {(time1) => {
     setTime1(time1);
    console.log('*********',time1);
    res3 = time1.toString().substring(0,15)
     console.log('---res3----',res3);
     res1 = time1.toString().substring(15, 25)
     console.log('-------',res1);
   
   }}
   //onDateChange={setDate} .toString().substring(15, 25)
   androidVariant="nativeAndroid"
   
 />
 <DatePicker
      
      textColor={COLORS.purple}
       mode="datetime"
       date={time2}
       is24hourSource="locale"
       locale='fr'
       onDateChange=
      {(time2) => {
         setTime2(time2);
      
       res2 = time2.toString().substring(15, 25)
         console.log('-------',res2);
       }}
       //onDateChange={setDate}
       androidVariant="nativeAndroid"
       
     />
</View>
        
<TouchableOpacity 
   onPress={handleAddCourseteButton}
>
        <View  style={styles.button}>
            <Text style={styles.textStyle}>Ajouer</Text>
            
        </View>
        </TouchableOpacity>
     
        
    </ScrollView>
 );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginTop:10,
        marginHorizontal:10,
    },
    sliderContainer:{
       flex:1,
       //marginLeft:30,
       //marginBottom:50,
    },
    dateContainer:{
        flexDirection:'row',
        marginTop:20,
      },
      textStyle2:{
        fontSize:18,
        fontFamily:"Cairo-Regular",
      },

 
  containertime:{
      flexDirection:'column',
      marginHorizontal:5
  },
  button:{
    width:'90%',
    height:38,
     borderRadius:15,
    //marginLeft:60,
    //marginTop:10,
    marginBottom:20,
    marginLeft:15,
    backgroundColor:COLORS.blueClair,
    justifyContent:'center',
    alignItems:'center',
    //position: 'absolute',
    //top: 100,
    //paddingTop: 5,
    
},
textStyle:{
    fontSize:18,
    color:'#fff',
    fontFamily:"Cairo-Bold",
    

},
  
});
export default CoursePlanification;