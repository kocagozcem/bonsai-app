import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {sm, md, lg} from '../../../constants/sizes';
import {lgText} from '../../../constants/text-sizes';

function Button({value, onPress, buttonStyle, textStyle}) {
  return (
    <TouchableOpacity
      style={[styles.defaultButtonContainer, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.defaultText, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  defaultButtonContainer: {
    paddingHorizontal: md,
    paddingVertical: sm,
    backgroundColor: '#eca3f5',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: lg,
  },

  defaultText: {
    fontSize: lgText,
    fontWeight: '700',
  },
});

export default Button;
