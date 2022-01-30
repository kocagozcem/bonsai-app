import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {sm, md} from '../../../constants/sizes';
import {lgText, mdText} from '../../../constants/text-sizes';

function Thumbnail({plant, style}) {
  if (plant !== null) {
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
});

export default React.memo(Thumbnail);
