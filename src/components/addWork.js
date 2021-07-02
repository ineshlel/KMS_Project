import React, { useState } from "react"; 
import { Button, SafeAreaView, StyleSheet, Modal, 
		View, TextInput, Dimensions ,Text,TouchableOpacity} from "react-native"; 
import { COLORS } from "../constants";
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../api/config';
import DatePicker from 'react-native-datepicker';

const { width } = Dimensions.get("window"); 
import jwt_decode from "jwt-decode";

const AddWork=props=> { 
	
	// This is to manage Modal State 
	const [isModalVisible, setModalVisible] = useState(false); 

	// This is to manage TextInput State 
	
    const [inputValue2, setInputValue2] = useState(""); 
	const [inputValue3, setInputValue3] = useState(""); 
	const [date, setDate] = useState('');
	const [date2, setDate2] = useState('');
 
	

	// Create toggleModalVisibility function that will 
	// Open and close modal upon button clicks. 
    const addFieldHandler=()=>{
        setModalVisible(!isModalVisible); 
        props.onAddField(inputValue2,inputValue3,date,date2);
		
        

        setInputValue2('');
		setInputValue3('');
		//setDate("");
		//setDate2("");
        
       // setModalVisible(false);
       
      }
	const toggleModalVisibility = () => { 
		setModalVisible(!isModalVisible); 
        //props.onAddField(value1,value2);
        console.log('seeeeeeent');
     
        setInputValue2('');
        
        
	}; 
	const addWorkHandler=async()=>{
		const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
		//const programID=await AsyncStorage.getItem('programID');
		//console.log(programID);
		
		//console.log('*************');
		var decoded = jwt_decode(DEMO_TOKEN);
		//console.log(decoded.user_id);
		//console.log(DEMO_TOKEN);
		var dataToSend = {
		  titre: inputValue2,
		  date_debut: date,
		  date_limite:date2,
		  ponderation:inputValue3,
		  partage_par:JSON.parse(decoded.user_id),
		  programme:props.id_pg,
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
	  
		fetch(apiConfig.url+'/api/travaux/', {
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
			  AsyncStorage.setItem('travailID',JSON.stringify(responseJson.id));
		      console.log('//////////////////////');
			
			})
			.catch((error) => {
			 console.error(error);
			});
			addFieldHandler();

	}

	return ( 
		<SafeAreaView style={styles.screen}> 
			

			{/** We are going to create a Modal with Text Input. */} 
						<TouchableOpacity onPress={toggleModalVisibility} >
						<View style={styles.addButton}>
                        <Entypo
                        name="plus"
                        color="white"
                        size={20}
                      />
                     <Text style={{fontFamily:'Cairo-SemiBold',color:'white',fontSize:18}}>Ajouter</Text></View>
	    </TouchableOpacity>

			{/** This is our modal component containing textinput and a button */} 
			<Modal animationType="slide"
				transparent visible={isModalVisible} 
				presentationStyle="overFullScreen"
				onDismiss={toggleModalVisibility}> 
				<View style={styles.viewWrapper}> 
					<View style={styles.modalView}> 
					<View ><Text style={styles.modalTitle}>Créer un travail</Text></View>
					
                        <TextInput placeholder="Nom..."
								value={inputValue2} 
                                style={styles.textInput} 
								onChangeText={(value2) => setInputValue2(value2)} />
								<TextInput placeholder="Pondération..."
							
								value={inputValue3} 
                                style={styles.textInput} 
								onChangeText={(value3) => setInputValue3(value3)} />
								 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    
        
	<SafeAreaView style={styles.dateContainer}>
	  
	<DatePicker
		date={date} //initial date from state
		mode="date" //The enum of date, datetime and time
		placeholder="Date Début"
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
		onDateChange={(date) => {
		  setDate(date);
		  console.log(date);
		}}
	  />
	  </SafeAreaView>
	  <SafeAreaView style={styles.dateContainer}>
	
	<DatePicker
		date={date2} //initial date from state
		mode="date" //The enum of date, datetime and time
		placeholder="Date Fin"
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
		onDateChange={(date2) => {
		  setDate2(date2);
		  console.log(date2);
		}}
	  />
	  </SafeAreaView>
	  </View>

                        <View style={styles.buttonContainer}>
						<TouchableOpacity
						 //onPress={addFieldHandler} 
						 onPress={addWorkHandler} 
						 >
						   <View style={styles.addButton}>
                             <Text style={{color:'white',fontFamily:'Cairo-SemiBold'}}>Ajouter</Text></View>
	                    </TouchableOpacity>
						<TouchableOpacity onPress={toggleModalVisibility} >
						   <View style={styles.addButton}>
                             <Text style={{color:'white',fontFamily:'Cairo-SemiBold'}}>Annuler</Text></View>
	                    </TouchableOpacity>
					
						</View>
						{/** This button is responsible to close the modal */} 
						
						
					</View> 
				</View> 
			</Modal> 
		</SafeAreaView> 
	); 
} 

// These are user defined styles 
const styles = StyleSheet.create({ 
	screen: { 
		flex: 1, 
		alignItems: 'flex-start', 
		//justifyContent: "center", 
	//	backgroundColor: "#fff", 
	}, 
	viewWrapper: { 
		flex: 1, 
		alignItems: "center", 
		justifyContent: "center", 
		backgroundColor: "rgba(0, 0, 0, 0.2)", 
	}, 
	modalView: { 
		alignItems: "center", 
		justifyContent: "center", 
		position: "absolute", 
		top: "50%", 
		left: "45%", 
		elevation: 8, 
		transform: [{ translateX: -(width * 0.4) }, 
					{ translateY: -90 }], 
		height: 280, 
		width: width * 0.9, 
		backgroundColor: "#fff", 
		borderRadius: 7, 
	}, 
	textInput: { 
		width: "90%", 
		borderRadius: 5, 
		paddingVertical: 8, 
		paddingHorizontal: 16, 
		borderColor: "rgba(0, 0, 0, 0.2)", 
		borderWidth: 1, 
		marginBottom: 8, 
	}, 
	modalTitle:{
		marginBottom:10,
		fontFamily:'Cairo-SemiBold',
		fontSize:16,
		
	},
	addButton:{
		width:85,
        height:35,
        borderRadius:14,
        backgroundColor:COLORS.blueClair,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
		marginHorizontal:12,
		marginBottom:20
	

	},
	buttonContainer:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'center',
		paddingHorizontal:15,
		marginTop:20,
   
   },
   dateContainer:{
	flexDirection:'column',
  },
  textStyle2:{
	fontSize:18,
	fontFamily:"Cairo-Regular",
  }
});
export default AddWork;