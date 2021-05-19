
export default function loginHandle (data){

    //const foundUser = Users.filter( item => {
      //  return userName == item.username && password == item.password;
   // } );

    if ( data.username.length == 0 || data.password.length == 0 ) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            {text: 'Okay'}
        ]);
        return;
    }

   /* if ( foundUser.length == 0 ) {
        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            {text: 'Okay'}
        ]);
        return;
    }*/
    setData({
        ...data,
        loading: true,
    });
    let dataToSend = {username: data.username, password: data.password};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://lazy-cow-12.loca.lt/auth/signin/', {
      method: 'POST',
      body:formBody,
       //JSON.stringify({"username": userEmail, 
      //"password": userPassword}),
      headers: {
        //Header Defination
     
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
})
      .then((response) => response.json())
      
      .then((responseJson) => {
        //Hide Loader
        console.log("/////////");
        setData({
            ...data,
            loading:false,
        });
        console.log(responseJson);
        console.log("********************");
       
       // Alert.alert("User register successfully \n userId: "+responseJson.token);
        
        // If server response message same as Data Matched
        if (responseJson.status_code === 200) {
            Alert.alert("User register successfully \n userId: "+responseJson.token);
          try {
           AsyncStorage.setItem('userToken', responseJson.token);
           logCurrentStorage();
           console.log('++++++++');
          } catch(e) {
            console.log(e);
          }
          console.log(responseJson.token);
          navigation.replace('TabNavigatorEmpl');
          
         
        } else {
          //setErrortext(responseJson.message);
          console.log('Please check your email id or password');
          Alert.alert("User not found ");
        }
      })
      .catch((error) => {
        //Hide Loader
        setData({
            ...data,
            loading:false,
        });
        console.error(error);
      });
}