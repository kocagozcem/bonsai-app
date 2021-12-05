import React, {useRef, useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {lg, md, xxl} from '../../../constants/sizes';
import {lgText, mdText} from '../../../constants/text-sizes';

function SearchBar() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  function valChanged(text) {
    // valInput(text);
    setInputValue(text);
  }

  return (
    <View style={[styles.searchbarContainer]}>
      <TextInput
        style={styles.searchInput}
        onChangeText={text => valChanged(text)}
        value={inputValue}
        ref={inputRef}
        selectionColor="white"
      />
      <TouchableOpacity
        onPress={() => (inputValue.length === 0 ? null : valChanged(''))}>
        <Icon
          size={30}
          name={inputValue.length === 0 ? 'search' : 'times'}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchbarContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: xxl,
    paddingHorizontal: md,
    borderRadius: lg,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: 0,
    color: 'white',
    textDecorationColor: 'white',
    fontSize: lgText,
    fontWeight: '700',
  },
});

export default SearchBar;
