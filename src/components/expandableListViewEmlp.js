import React, { Component } from 'react';
import { Alert, StyleSheet, View, TouchableOpacity, Platform} from 'react-native';


import ProgramActionsLimitedEmpl from './programActionsLimitedEmpl';
import ProgramItem from './programItem';



export default class ExpandableListViewEmpl extends Component {

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
         
        
            <ProgramItem
              name={this.props.item.programme_name}
              dd={this.props.item.date_debut}
              df={this.props.item.date_fin}
            />
        

         
        </TouchableOpacity>
        <View style={{ height: this.state.layoutHeight, overflow: 'hidden' }}>
       <ProgramActionsLimitedEmpl
       id_dm={this.props.item.id}/>
        
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