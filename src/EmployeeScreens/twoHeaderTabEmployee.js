import { toHumanSize } from 'i18n-js';
import React, { Component } from 'react'
import { Animated, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants';
import InscriptionEmployee from './inscriptionEmployee';



//import ConsignesScreen from './ConsignesScreen';

//import InfoForm from "./InfoForm";


const { width } = Dimensions.get('window');


export default class TwoHeaderTabFormateur extends Component {
  
  state = {

    active: 0,
    xTab1: 0,
    xTab2: 0,
    xTab3: 0,
    translateX: new Animated.Value(0),
    translateXTab1: new Animated.Value(0),
    translateXTab2: new Animated.Value(width),
   // translateXTab3: new Animated.Value(2 * width),
    translateY: -1000,
    
  
  }
  //navigation=this.state;

  handleSlide(xCordinate){
    let { active, xTab1, xTab2, translateX, translateXTab1, translateXTab2, translateY } = this.state;
    
    // Tab Bar
    Animated.spring(translateX, {
      toValue: xCordinate,
      duration: 100,
      useNativeDriver: true,
    }).start();

    // Content
    if (active === 0){
      // Tab 1 -> 0
      // Tab 2 -> width
      // Tab 3 -> 2x width
      this.handleContentSlide(0, width);
    }

    else if (active === 1){
      // Tab 1 -> -width
      // Tab 2 -> 0
      // Tab 3 -> width
      this.handleContentSlide(-width, 0);
    }

    else {
      // Tab 1 -> -2x width
      // Tab 2 -> -width
      // Tab 3 -> 0
      this.handleContentSlide(-2 * width, -width);
    }
  }

  
  handleContentSlide(tab1, tab2){
    let {translateXTab1, translateXTab2} = this.state;

    Animated.parallel([
      Animated.spring(translateXTab1, {
        toValue: tab1,
        duration: 100,
        useNativeDriver: true,
      }).start(),

      Animated.spring(translateXTab2, {
        toValue: tab2,
        duration: 100,
        useNativeDriver: true,
      }).start(),

      
    ])

  }

  
  render() {
    let { active, xTab1, xTab2, translateX, translateXTab1, translateXTab2, translateY} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>     
          
          {/* TAB BAR */}
          <View style={styles.tabContainer}>
            
            {/* Slidebar */}
            <Animated.View style={[ { transform: [{translateX}] }, styles.overlay]}/>

            {/* Tab 1 */}
            <TouchableOpacity style={[styles.tab, styles.tab1]}
                              onLayout={event => this.setState({xTab1: event.nativeEvent.layout.x})}
                              onPress={() =>
                                  this.setState({ active: 0 }, () =>
                                      this.handleSlide(xTab1)
                              )}>
              <Text style={{color: active === 0? COLORS.purple : COLORS.purple,fontSize:18}}>Inscription</Text>
            </TouchableOpacity>

            {/* Tab 2 */}
            <TouchableOpacity style={[styles.tab, styles.tab2]}
                              onLayout={event => this.setState({xTab2: event.nativeEvent.layout.x})}
                              onPress={() =>
                                  this.setState({ active: 1 }, () =>
                                      this.handleSlide(xTab2)
                              )}>
                              
              <Text style={{color: (active === 1)? COLORS.purple : COLORS.purple,fontSize:18}}>Demandes</Text>
            </TouchableOpacity>

            {/* Tab 3 */}
           

          </View>

          {/* CONTENT */}  
          <View>
<ScrollView>
            {/* Tab 1 Content */}
            <Animated.View 

              style={{ 
               
                transform:[{
                  translateX: translateXTab1
                }]
              }}
              onLayout={event => this.setState({translateY: event.nativeEvent.layout.height})}
            >
              <InscriptionEmployee/>
              
                
            </Animated.View>

            {/* Tab 2 Content */}
            <Animated.View style={{ 
             
              transform:[
                { translateX: translateXTab2 },
                { translateY: -translateY}
              ]
            }}>
            <ThreeTabRegistrationForma/>
            </Animated.View>

          
            </ScrollView>
          </View>
        

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  // Tab Selector Styles
  tabContainer:{
    flexDirection: 'row',
    height: 36,
    marginTop: 10, 
    marginBottom: 10,
    //position: 'relative',
    
  },

  overlay:{
    position: 'absolute',
    width: '32.5%',
    height: '100%',
    top: 0,
    left: 27,
    //backgroundColor:COLORS.purple,
    //borderRadius:12,
    borderBottomColor:COLORS.purple,
    borderBottomWidth:2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  tab:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // borderWidth: 1,
 
  },

  tab1:{
    borderRightWidth: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },

  tab2:{
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,

  },


  // Content Styles
  contentContainter:{
  //  justifyContent: 'center',
   // alignItems: 'center'
  },

  contentText: {
    color: 'white',
    fontSize: 25,

  } 
});