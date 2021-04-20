import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
//import App from '../'
import { I18nManager, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class Test extends React.Component {
    constructor(props) {
      super(props);
      setI18nConfig(); // set initial config
    }
  
    componentDidMount() {
      RNLocalize.addEventListener('change', this.handleLocalizationChange);
    }
  
    componentWillUnmount() {
      RNLocalize.removeEventListener('change', this.handleLocalizationChange);
    }
  
    handleLocalizationChange = () => {
      setI18nConfig();
      this.forceUpdate();
    };
  
    render() {
      return (
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.value}>{translate("hello")}</Text>
        </SafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    value: {
      fontSize: 18,
    },
  });