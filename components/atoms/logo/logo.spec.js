/**
 * @format
 */

import 'react-native';
import React from 'react';
import Logo from './logo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with dark theme correctly', () => {
  const tree = renderer.create(<Logo theme={'dark'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
