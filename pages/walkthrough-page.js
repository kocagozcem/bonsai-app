import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Walkthrough from '../components/organisms/walkthrough/walkthrough';
import PageLayout from '../layouts/page-layout';

const pages = [
  {
    image:
      'https://i.pinimg.com/originals/f4/a2/6f/f4a26fefa43e0bb33b7faf8fd16d528f.png',
    text: 'Find the Bonsai that will suite to your place',
    buttonText: 'Next',
  },
  {
    image:
      'https://images.vexels.com/media/users/3/199964/isolated/preview/ae782cab8ae7e722febb5869c09574cc-happy-delivery-boy-character-by-vexels.png',
    text: 'Let us deliver it for you',
    buttonText: 'Complete',
  },
];

function WalkthroughPage({navigation}) {
  function closeWalkthrough() {
    navigation.navigate('Home');
  }

  return (
    <PageLayout noPadding>
      <Walkthrough pages={pages} closeAction={closeWalkthrough} />
    </PageLayout>
  );
}

const styles = StyleSheet.create({});

export default WalkthroughPage;
