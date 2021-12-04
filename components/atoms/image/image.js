import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {sm} from '../../../constants/sizes';
import {Image as RNImage} from 'react-native';
import PropTypes from 'prop-types';

function Image({src, containerStyle, imageStyle}) {
  return (
    <View style={containerStyle}>
      <RNImage
        source={{uri: src}}
        resizeMode="contain"
        style={[styles.defaultImage, imageStyle]}
      />
    </View>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  imageStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  defaultImage: {
    width: 300,
    height: 300,
    margin: sm,
  },
});

export default React.memo(Image);
