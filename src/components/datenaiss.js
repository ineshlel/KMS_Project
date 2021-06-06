import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

//import DatePicker from the package we installed
import DatePicker from 'react-native-datepicker';
import { COLORS } from '../constants';

const DateNaissance = (props) => {
  const [date, setDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
   
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2030"
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
                width:'85%',
                height:40,
                marginTop:5,
                borderRadius:10,
                //borderWidth:1,
                elevation:1,
              
            },
          }}
          onDateChange={(date) => {
            setDate(date);
            console.log(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DateNaissance;

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   // padding: 10,
    //justifyContent: 'center',
    //alignItems: 'center',
    
  },
 
  datePickerStyle: {
    width: '80%',
    margin:10,
 
   
    
    
  },
  textStyle:{
    fontSize:12,
   
},
});