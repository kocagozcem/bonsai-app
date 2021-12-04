import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {xlHeader} from '../../../constants/text-sizes';

function Logo({theme = 'light'}) {
  const color = theme == 'light' ? styles.dark : styles.light;

  return <Text style={[styles.logoText, color]}>bons.io</Text>;
}

const styles = StyleSheet.create({
  logoText: {
    fontSize: xlHeader,
    fontFamily: 'Comfortaa-VariableFont_wght',
  },

  dark: {
    color: '#5aa897',
  },

  light: {
    color: 'white',
  },
});

export default Logo;
