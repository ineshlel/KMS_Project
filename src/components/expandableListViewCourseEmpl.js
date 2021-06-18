import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
import CourseActionEmpl from './courseActionEmpl';

import CourseItem from './courseItem';




export default class ExpandableListViewCourseEmpl extends Component {

  constructor() {
    super();
    this.state = {
      layoutHeight: 0
    }
  }
 
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layoutHeight: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layoutHeight: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  showSelectedCategory = (item) => {
    Alert.alert(item);
  }
  render() {
    return (
      <View style={styles.panelContainer}>
        
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction}>
         
        
            <CourseItem
              name={this.props.item.titre}
              country={this.props.item.date}
            />
        

         
        </TouchableOpacity>
        <View style={{ height: this.state.layoutHeight, overflow: 'hidden' }}>
          <CourseActionEmpl
          idc={this.props.item.id}/>
        
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      backgroundColor: '#F5FCFF',
    },
 
  });