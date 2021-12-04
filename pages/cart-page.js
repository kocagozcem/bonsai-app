import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrderCounter from '../components/atoms/order-counter/order-counter';

function CartPage() {
  const isFocused = useIsFocused();

  const [cartItems, setCartItems] = useState([]);
  useEffect(async () => {
    if (isFocused) {
      let items = await retrieveCartItems();
      setCartItems(items);
    }
  }, [isFocused]);

  async function retrieveCartItems() {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    return items;
  }

  async function cartHandler(name, count) {
    if (count > 0) {
      await AsyncStorage.setItem(name, String(count));
    } else {
      await AsyncStorage.removeItem(name);
    }
  }

  function test2() {
    if (cartItems.length > 0)
      return (
        <View style={{flex: 1}}>
          {cartItems.map((key, index) => {
            if (key[1] <= 0) return <View key={index} />;
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Text key={index}>{key[0]}</Text>
                <OrderCounter
                  countChangeEvent={count => cartHandler(key[0], count)}
                  count={Number(key[1])}
                />
              </View>
            );
          })}
        </View>
      );

    return <View />;
  }

  return <View style={styles.content}>{test2()}</View>;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default CartPage;
