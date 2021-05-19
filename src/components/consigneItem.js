import React ,{useState}from 'react';

import {View,Text, StyleSheet,  TouchableOpacity,
    PermissionsAndroid,Platform }from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../constants';
import CurrentDate from './currentDate';
import RNFetchBlob from 'rn-fetch-blob';



const ConsigneItem=props=>{
   
      
    //const fileUrl = 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg';
  const  fileUrl=props.URLFile;
 
    const checkPermission = async () => {
      
      // Function to check the platform
      // If Platform is Android then check for permissions.
   
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
                    color={COLORS.blueClair}
                    size={26}
                />
        </View>
      
        </View>
        </TouchableOpacity>
        <CurrentDate/>
       </View>

    
 );
};
const styles=StyleSheet.create({
      container:{
         flex:1,
          flexDirection:'row',
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
          fontSize:15,
          fontWeight:'bold',
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
          marginBottom:18,
          marginTop:6,
          position:'absolute'


      },

 
});
export default ConsigneItem;