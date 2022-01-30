import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {md} from '../constants/sizes';

function PageLayout(props) {
  return (
    <View style={[styles.content, {padding: !props['noPadding'] ? md : 0}]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingBottom: 0,
  },
});

export default PageLayout;
