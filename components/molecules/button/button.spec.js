import 'react-native';
import React from 'react';
import Button from './button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button value="test" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
