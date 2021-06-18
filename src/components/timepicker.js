import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { COLORS } from '../constants';
import StaticInput from './staticInput';

//import DatePicker from the package we installed

/*<DatePicker
      
      textColor={COLORS.purple}
       mode="time"
       date={time2}
       is24hourSource="locale"
       locale='fr'
       onDateChange=
      {(time2) => {
         setTime2(time2);
      
        
         console.log('-------',time2);
       }}
       //onDateChange={setDate}
       androidVariant="nativeAndroid"
       
     /> */
const TimePickerInput = props => {
    const [time1, setTime1] = useState(new Date())
    const [time2, setTime2] = useState(new Date())
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containertime}>
   
      <DatePicker
      
     textColor={COLORS.purple}
      mode="datetime"
      date={time1}
      is24hourSource="locale"
      locale='fr'
      onDateChange=
      {(time1) => {
        setTime1(time1);
     
        var res1 = time1.toString().substring(15, 25)
        console.log('-------',res1);
      }}
      //onDateChange={setDate} .toString().substring(15, 25)
      androidVariant="nativeAndroid"
      
    />
   </View>
    </SafeAreaView>
  );
};

export default TimePickerInput;

const styles = StyleSheet.create({
  container: {
   
    //padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  containertime:{
      flexDirection:'row',
      //marginHorizontal:20
     flex:1,
  }
});