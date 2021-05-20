import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {sm, md} from '../../../constants/sizes';
import {lgText, mdText} from '../../../constants/text-sizes';

function Thumbnail({recipe}) {
  const navigation = useNavigation();
  const {image} = recipe;

  if (recipe !== null) {
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('Details', {recipe})}
        style={styles.touchable}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            {image !== null ? (
              <Image
                source={{
                  uri: image,
                }}
                style={styles.image}
              />
            ) : (
              <Text>error</Text>
            )}
          </View>
          <View style={styles.titleContainer}>
            <Text lineBreakMode="clip" numberOfLines={2} style={styles.title}>
              {recipe.name}
            </Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>${recipe.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return <View />;
}

const styles = StyleSheet.create({
  touchable: {
    width: 120,
    height: 180,
  },
  card: {
    flex: 1,
    borderRadius: md,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 3,
    alignSelf: 'stretch',
    backgroundColor: '#f2f2f2',
    borderRadius: md,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  titleContainer: {
    flex: 2,
    alignSelf: 'stretch',
    paddingTop: sm,
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
  },
});

export default Thumbnail;
