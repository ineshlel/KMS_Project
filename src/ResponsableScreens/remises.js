
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Import required components
/* */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList
} from 'react-native';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';

import { COLORS } from '../constants';
import ConsigneItem from '../components/consigneItem';



const FilePickerRespRemises = () => {
  const [singleFile, setSingleFile] = useState('');

  const[files,setFiles]=useState([]);

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
      addFileHandler(res.name)
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

 
  const addFileHandler= (fileName)=>{
    setFiles(currentFiles=>
      [...files,{id:Math.random().toString(),consigneName:fileName}]);

  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
       
        {/*To multiple single file attribute*/}
        <TouchableOpacity
          activeOpacity={0.5}
          //style={styles.buttonStyle}
          onPress={ selectOneFile  }
        >
          {/*Multiple files selection button*/}
          <View style={styles.addButton}>
                        <Ionicons
                        name="attach"
                        color="white"
                        size={24}
                      />
                     <Text style={{fontSize:16,fontFamily:'Cairo-SemiBold',color:'white'}}>Ajouter</Text></View>
        </TouchableOpacity>
     
      </View>
   
      <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={files} 
      renderItem={itemData=> 
      <ConsigneItem
      id ={itemData.item.id}
      name={itemData.item.consigneName}
      />
      }>
       
      </FlatList>
    </SafeAreaView>
  );
};

export default FilePickerRespRemises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    padding: 12,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  addButton:{
    width:90,
    height:40,
    borderRadius:14,
    backgroundColor:COLORS.blueClair,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
 

},
});