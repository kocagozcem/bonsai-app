/**
 * @format
 */

import 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import OrderCounter from './order-counter';
import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<OrderCounter countChangeEvent={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('when count is 1', () => {
  const tree = renderer
    .create(<OrderCounter count={1} countChangeEvent={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('count become 1 when clicked to minus button', () => {
  const root = renderer.create(
    <OrderCounter count={2} countChangeEvent={() => {}} />,
  );
  const minusButton = root.root.findAllByType(TouchableOpacity)[0];
  act(() => {
    minusButton.props.onPress();
  });

  const textValue = root.root.findAllByType(Text)[1].props.children;

  expect(textValue).toBe(1);
});

it('count become 3 when clicked to plus button', () => {
  const root = renderer.create(
    <OrderCounter count={2} countChangeEvent={() => {}} />,
  );
  const plusButton = root.root.findAllByType(TouchableOpacity)[1];
  act(() => {
    plusButton.props.onPress();
  });

  const textValue = root.root.findAllByType(Text)[1].props.children;

  expect(textValue).toBe(3);
});

it('count become 0 when clicked to delete button', () => {
  const root = renderer.create(
    <OrderCounter count={1} countChangeEvent={() => {}} />,
  );
  const deleteButton = root.root.findAllByType(TouchableOpacity)[0];
  act(() => {
    deleteButton.props.onPress();
  });

  const textCount = root.root.findAllByType(Text).length;

  expect(textCount).toBe(1);
});
