import React, {useState} from 'react';
import {StyleSheet, View, Text, Keyboard, Pressable} from 'react-native';
import SearchBar from '../components/molecules/search-bar/search-bar';
import {md, sm} from '../constants/sizes';
import {xlText} from '../constants/text-sizes';

function SearchPage() {
  return (
    <Pressable
      onPress={Keyboard.dismiss}
      android_disableSound
      style={{flex: 1}}>
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Search</Text>
          <SearchBar />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  searchContainer: {
    height: '15%',
    minHeight: 100,
    padding: md,
    paddingBottom: sm,
    backgroundColor: '#5aa897',
    justifyContent: 'space-between',
  },

  searchText: {
    color: 'white',
    fontSize: xlText,
    fontWeight: '700',
  },
});

export default SearchPage;
