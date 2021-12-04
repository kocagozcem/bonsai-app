import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {sm, xs} from '../../../constants/sizes';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {xlText} from '../../../constants/text-sizes';

function OrderCounter({countChangeEvent, count = 0}) {
  const [orderCount, setOrderCount] = useState(count);

  useEffect(() => {}, [count]);

  function button(icon, event) {
    return (
      <TouchableOpacity onPress={event} style={styles.buttonContainer}>
        <Icon name={icon} size={xlText} color="#fff" />
      </TouchableOpacity>
    );
  }

  async function changeCount(type) {
    let count = orderCount;
    if (type == 'plus') {
      count = Number(orderCount) + 1;
    } else {
      count = orderCount - 1;
    }

    setOrderCount(count);
    countChangeEvent(count);
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: sm,
      }}>
      {orderCount == 0
        ? null
        : button(orderCount == 1 ? 'trash' : 'minus', () =>
            changeCount('minus'),
          )}
      {orderCount > 0 ? (
        <View
          style={{padding: 5, paddingHorizontal: 10, backgroundColor: '#fff'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{orderCount}</Text>
        </View>
      ) : null}
      {button('plus', () => changeCount('plus'))}
    </View>
  );
}

OrderCounter.propTypes = {
  countChangeEvent: PropTypes.func.isRequired,
  count: PropTypes.number,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#5aa897',
    padding: xs,
    borderRadius: sm,
  },
});

export default OrderCounter;
