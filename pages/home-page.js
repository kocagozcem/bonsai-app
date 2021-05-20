import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import OrderCounter from '../components/atoms/order-counter/order-counter';
import Thumbnail from '../components/molecules/thumbnail/thumbnail';

const recipe = {
  image:
    'https://www.salonbitkileri.com/image/cache/cache/1-1000/331/main/396e-bonsai-ficus-2000gr-0-4-0-1-4-500x500.jpg',
  name: 'Bonsai Ficus Gingseng',
  price: 4,
};
function HomePage() {
  return (
    <View style={styles.content}>
      <Thumbnail recipe={recipe} />
      <OrderCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default HomePage;
