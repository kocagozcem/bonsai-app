import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {sm, md} from '../../../constants/sizes';
import {lgText, mdText} from '../../../constants/text-sizes';
import OrderCounter from '../../atoms/order-counter/order-counter';

function Thumbnail({plant, isInCart, style}) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(isInCart);
  console.log(plant.id);

  useFocusEffect(
    React.useCallback(() => {
      async function getData() {
        const data = await AsyncStorage.getItem(plant.name);

        return data;
      }

      let cnt;

      getData().then(val => {
        cnt = Number(val) || 0;
        if (cnt !== count) {
          setIsLoading(true);
          setCount(cnt);
          setIsLoading(false);
        }
      });
    }, []),
  );

  // Function to pass to the order-counter component.
  async function cartHandler(count) {
    if (count > 0) {
      await AsyncStorage.setItem(plant.name, String(count));
    } else {
      await AsyncStorage.removeItem(plant.name);
    }
  }

  if (plant !== null && !isLoading) {
    return (
      <View style={[styles.card, style]}>
        <View style={styles.imageContainer}>
          {plant.image !== null ? (
            <Image
              source={{
                uri: plant.image,
              }}
              style={styles.image}
            />
          ) : (
            <Text>error</Text>
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text lineBreakMode="clip" numberOfLines={2} style={styles.title}>
            {plant.name}
          </Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>${plant.price}</Text>
          </View>
        </View>
        <View style={styles.counterContainer}>
          <OrderCounter
            count={count}
            countChangeEvent={cnt => cartHandler(cnt)}
          />
        </View>
      </View>
    );
  }

  return <View />;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: md,
    overflow: 'hidden',
    flex: 1,
    height: 180,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 3,
    alignSelf: 'stretch',
    borderRadius: md,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },
  titleContainer: {
    flex: 2,
    alignSelf: 'stretch',
    padding: sm,
  },
  title: {
    fontSize: md,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  scoreText: {
    fontSize: lgText,
    fontWeight: 'bold',
    color: '#5aa897',
  },
  counterContainer: {
    zIndex: 10,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default React.memo(Thumbnail);
