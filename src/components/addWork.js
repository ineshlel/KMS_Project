import React, { useState } from "react"; 
import { Button, SafeAreaView, StyleSheet, Modal, 
		View, TextInput, Dimensions ,Text,TouchableOpacity} from "react-native"; 
import { COLORS } from "../constants";
import Entypo from 'react-native-vector-icons/Entypo';

const { width } = Dimensions.get("window"); 

const AddWork=props=> { 
	
	// This is to manage Modal State 
	const [isModalVisible, setModalVisible] = useState(false); 

	// This is to manage TextInput State 
	
    const [inputValue2, setInputValue2] = useState(""); 
	

	// Create toggleModalVisibility function that will 
	// Open and close modal upon button clicks. 
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
                        <Entypo
                        name="plus"
                        color="black"
                        size={20}
                      />
                     <Text>Ajouter</Text></View>
	    </TouchableOpacity>

			{/** This is our modal component containing textinput and a button */} 
			<Modal animationType="slide"
				transparent visible={isModalVisible} 
				presentationStyle="overFullScreen"
				onDismiss={toggleModalVisibility}> 
				<View style={styles.viewWrapper}> 
					<View style={styles.modalView}> 
					<View style={styles.modalTitle}><Text>Créer un travail</Text></View>
					
                        <TextInput placeholder="Nom..."
								value={inputValue2} 
                                style={styles.textInput} 
								onChangeText={(value2) => setInputValue2(value2)} />
                        <View style={styles.buttonContainer}>
						<TouchableOpacity onPress={addFieldHandler} >
						   <View style={styles.addButton}>
                             <Text>Ajouter</Text></View>
	                    </TouchableOpacity>
						<TouchableOpacity onPress={toggleModalVisibility} >
						   <View style={styles.addButton}>
                             <Text>Annuler</Text></View>
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
		left: "50%", 
		elevation: 8, 
		transform: [{ translateX: -(width * 0.4) }, 
					{ translateY: -90 }], 
		height: 200, 
		width: width * 0.8, 
		backgroundColor: "#fff", 
		borderRadius: 7, 
	}, 
	textInput: { 
		width: "80%", 
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
		width:75,
        height:35,
        borderRadius:14,
        backgroundColor:COLORS.orange,
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
export default AddWork;