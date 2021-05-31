
import AsyncStorage from '@react-native-community/async-storage';
var DEMO_TOKEN = AsyncStorage.getItem('userToken');

export default {
	url:'https://tall-crab-45.loca.lt',
	myheaders:{
		Authorization:'Bearer' + DEMO_TOKEN,
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
	}
};