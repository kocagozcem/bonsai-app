import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {sm} from '../../../constants/sizes';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {xlText} from '../../../constants/text-sizes';

function OrderCounter({countChangeEvent, count = 0}) {
  function button(icon, event) {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Icon name={icon} size={xlText} />
      </TouchableOpacity>
    );
  }

  return <View>{button('plus', () => console.log('click'))}</View>;
}

OrderCounter.propTypes = {
  countChangeEvent: PropTypes.func.isRequired,
  count: PropTypes.number,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#5aa897',
    padding: sm,
  },
});

export default OrderCounter;
