import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,SafeAreaView,TouchableOpacity, ScrollView,Modal,FlatList,Dimensions}from 'react-native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinkItem from '../components/linkItem';
import { COLORS } from '../constants';
const { width } = Dimensions.get("window"); 


//import Icon from 'react-native-vector-icons/Ionicons';





const ReunionForma=props=>{
   
  const [isModalVisible, setModalVisible] = useState(false); 

	// This is to manage TextInput State 
	
    const [inputValue2, setInputValue2] = useState(""); 

    const addFieldHandler=()=>{
      setModalVisible(!isModalVisible); 
      props.onAddField(inputValue2);
      

      setInputValue2('');
      
     // setModalVisible(false);
     
    }
const toggleModalVisibility = () => { 
  setModalVisible(!isModalVisible); 
      //props.onAddField(value1,value2);
      console.log('seeeeeeent');
   
      setInputValue2('');
      
      
};
    return (
      <SafeAreaView style={styles.screen}> 
			

			{/** We are going to create a Modal with Text Input. */} 
						<TouchableOpacity onPress={toggleModalVisibility} >
						<View style={styles.addButton}>
                        <MaterialIcons
                        name="add-link"
                        color="white"
                        size={20}
                      />
                     <Text style={{color:'white'}}> Ajouter lien</Text></View>
	    </TouchableOpacity>

			{/** This is our modal component containing textinput and a button */} 
			<Modal animationType="slide"
				transparent visible={isModalVisible} 
				presentationStyle="overFullScreen"
				onDismiss={toggleModalVisibility}> 
				<View style={styles.viewWrapper}> 
					<View style={styles.modalView}> 
					<View style={styles.modalTitle}><Text
          style={{color:COLORS.purple,
            fontFamily:'Cairo-SemiBold',}}>
            Ajouter lien de la réunion</Text></View>
					
                        <TextInput placeholder="lien..."
								value={inputValue2} 
                                style={styles.textInput} 
								onChangeText={(value2) => setInputValue2(value2)} />
                        <View style={styles.buttonContainer}>
						<TouchableOpacity
						 //onPress={addFieldHandler} 
						 onPress={addFieldHandler} 
						 >
						   <View style={styles.addButton}>
                             <Text style={{color:'white'}}>Ajouter</Text></View>
	                    </TouchableOpacity>
						<TouchableOpacity onPress={toggleModalVisibility} >
						   <View style={styles.addButton}>
                             <Text style={{color:'white'}}>Annuler</Text></View>
	                    </TouchableOpacity>
					
						</View>
						{/** This button is responsible to close the modal */} 
						
						
					</View> 
				</View> 
			</Modal> 
    
		</SafeAreaView> 
 );
};
const styles=StyleSheet.create({
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
		height: 180, 
		width: width*0.9 , 
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
		
	},
	addButton:{
		width:98,
        height:35,
        borderRadius:14,
        backgroundColor:COLORS.blueClair,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
		marginHorizontal:12,
    marginTop:5
	

	},
	buttonContainer:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'center',
		paddingHorizontal:15,
		marginTop:20,
   
   },
     
});

export default ReunionForma;