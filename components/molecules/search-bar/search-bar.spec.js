import 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchBar from './search-bar';
import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<SearchBar />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('change text input value', () => {
  const tree = renderer.create().toJSON();

  expect(tree).toMatchSnapshot();
});

it('test input value change', () => {
  const root = renderer.create(<SearchBar />);
  const input = root.root.findByType(TextInput);

  act(() => {
    input.props.onChangeText('test');
  });

  expect(input.props.value).toBe('test');
});

it('test if search button clears input value', async () => {
  const root = renderer.create(<SearchBar />);
  const input = root.root.findByType(TextInput);
  const button = root.root.findByType(TouchableOpacity);

  act(() => {
    input.props.onChangeText('test');
  });

  act(() => {
    button.props.onPress();
  });
  expect(input.props.value).toBe('');
});

it('test if input value is null button doesnt change it', async () => {
  const root = renderer.create(<SearchBar />);
  const input = root.root.findByType(TextInput);
  const button = root.root.findByType(TouchableOpacity);

  act(() => {
    input.props.onChangeText('');
  });

  act(() => {
    button.props.onPress();
  });
  expect(input.props.value).toBe('');
});
