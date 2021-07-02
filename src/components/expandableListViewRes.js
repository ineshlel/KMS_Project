import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
import ProgramActions from './programActions';
import ProgramItem from './programItem';
import ProgramItemRes from './programItemRes';



export default class ExpandableListViewRes extends Component {

  constructor() {
    super();
    this.state = {
      layoutHeight: 0
    }
  }
  /*   {
            this.props.item.subCategory.map((item, key) => (
              <TouchableOpacity key={key} style={styles.subCategoryText} onPress={this.showSelectedCategory.bind(this, item.name)}>
                <Text> {item.name} </Text>
                <View style={{ width: '80%', height: 1, backgroundColor: '#000',borderWidth:2 }} />
              </TouchableOpacity>
            ))
          }*/

  // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
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
         
        
            <ProgramItemRes
              name={this.props.item.programme_name}
              dd={this.props.item.date_debut}
              df={this.props.item.date_debut}
              nf={this.props.item.formateur_name}
            />
        

         
        </TouchableOpacity>
        <View style={{ height: this.state.layoutHeight, overflow: 'hidden' }}>
          <ProgramActions 
             idpg={this.props.item.id}
             />
        
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