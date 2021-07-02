import React ,{useState}from 'react';

import {View,Text, StyleSheet,  TouchableOpacity,Image,
    PermissionsAndroid,Platform ,Alert}from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

import RNFetchBlob from 'rn-fetch-blob';
import { useNavigation } from '@react-navigation/native';
import apiConfig from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from "jwt-decode";

import DocumentPicker from 'react-native-document-picker';



/*
       <Image
            source={require('../assets/images/paper-clip.png')}
            style={{
              
              height: 28,
              resizeMode: 'contain',
              alignSelf:'flex-start'
            }}
          /> */
const ConsigneItemRem=props=>{
    
const navigation = useNavigation();
const [singleFile, setSingleFile] = useState('');
const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
     
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res)
      const DEMO_TOKEN = await AsyncStorage.getItem('userToken');
       
  
      var decoded = jwt_decode(DEMO_TOKEN);
      //const travailID=await AsyncStorage.getItem('travailID');
      console.log("----------",props.id);
      console.log('////////////',decoded.user_id)
    
      //Check if any file is selected or not
      if (singleFile != null) {
        //If file selected then create FormData
        //const fileToUpload = singleFile;
        const dataup = new FormData();
        dataup.append('piece_jointe', res);
        dataup.append('consigne', props.id);
        dataup.append('remise_par',decoded.user_id);
        fetch(apiConfig.url+'/api/remiseUpload/', {
          method: 'POST',
          body: dataup,
          headers: {
        
            'Authorization':'Bearer ' + DEMO_TOKEN,
            'Content-Type': 'multipart/form-data; ',
      
          },
        }).then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          console.log(responseJson);
          AsyncStorage.setItem('consigneID',JSON.stringify(responseJson.id));
          Alert.alert("Votre remise a étè effectué pour la consigne "+props.name);
        
        }).catch((error) => {
            //Hide Loader
           console.error(error);
          });
       
     
      
        } 
     //addFileHandler(res.name)
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
 //const fileUrl = 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg';
  const  fileUrl=props.URLFile;
 
    const checkPermission = async () => {
         if (Platform.OS === 'ios') {
        downloadFile();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message:
                'Application needs access to your storage to download File',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // Start downloading
            downloadFile();
            console.log('Storage Permission Granted.');
          } else {
            // If permission denied then show alert
            Alert.alert('Error','Storage Permission Not Granted');
          }
        } catch (err) {
          // To handle permission related exception
          console.log("++++"+err);
        }
      }
    };
   
    const downloadFile = () => {
     
      // Get today's date to add the time suffix in filename
      let date = new Date();
      // File URL which we want to download
      let FILE_URL = fileUrl;    
      // Function to get extention of the file url
      let file_ext = getFileExtention(FILE_URL);
     
      file_ext = '.' + file_ext[0];
     
      // config: To get response by passing the downloading related options
      // fs: Root directory path to download
      const { config, fs } = RNFetchBlob;
      let RootDir = fs.dirs.PictureDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          path:
            RootDir+
            '/file_' + 
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            file_ext,
          description: 'downloading file...',
          notification: true,
          // useDownloadManager works with Android only
          useDownloadManager: true,   
        },
      };
      config(options)
        .fetch('GET', FILE_URL)
        .then(res => {
          // Alert after successful downloading
          console.log('res -> ', JSON.stringify(res));
          alert('File Downloaded Successfully.');
        });
    };
   
    const getFileExtention = fileUrl => {
      // To get the file extension
      return /[.]/.exec(fileUrl) ?
               /[^.]+$/.exec(fileUrl) : undefined;
    };
   return (
     <View style={styles.container}>
           <View style={styles.itemContainer} >
        <TouchableOpacity 
        onPress={checkPermission}
       // onPress={ WebViewComponent}
      
        >
        <View style={styles.container}>
        <View >
        <Text  style={styles.textName}>{props.name}</Text>
        </View>
     
        <View style={styles.downArrow}>
          <FontAwesome5 
                    name="file-download"
                    color={COLORS.orange}
                    size={26}
                />
        </View>
     
      
        </View>
        </TouchableOpacity>
      
       </View>
  
       <TouchableOpacity   
        activeOpacity={0.5}
        onPress={ selectOneFile  }>
       <View style={styles.fileadd}>
           <Text style={{fontSize:16,borderBottomWidth:1,color:COLORS.blueClair,borderBottomColor:COLORS.blueClair}}>Remettre</Text>
           <View><Ionicons
                        name="attach"
                        color={COLORS.blueClair}
                        size={24}
                      /></View>
        </View>
        </TouchableOpacity>
       </View>
    
 );
};
const styles=StyleSheet.create({
      container:{
          marginRight:10,
          flexDirection:'column',
      },
      itemContainer:{
        flexDirection:'column',
        marginHorizontal:30,
          marginVertical:5,
         // marginTop:40,
         //marginBottom:5,
          borderRadius:10,
          borderColor:COLORS.purple,
          borderWidth:1,
          padding:10,
          width:'80%',
         backgroundColor:'white',
          shadowColor:'black',
          shadowOffset:{width:0,height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
          elevation:2,
         
          },
       itemStyle:{
           flexDirection:'row',
       },
      textName:{
          fontSize:16,
          //fontWeight:'bold',
          fontFamily:'Cairo-Regular',
          marginBottom:5,
      },
      textCountry:{
          color:COLORS.orange
      },
      downArrow:{
         // justifyContent:'center',
          //alignItems:'center',
          marginLeft:'92%',
          //marginVertical:25,
          //marginBottom:20,
          marginTop:3,
          position:'absolute'
        },
        fileadd:{
      marginLeft:220,
      //marginRight:40,
      flexDirection:'row'
   
   
         },

 
});
export default ConsigneItemRem;