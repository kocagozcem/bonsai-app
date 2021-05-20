import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {md, sm} from '../../../constants/sizes';
import {mdHeader} from '../../../constants/text-sizes';
import PropTypes from 'prop-types';
import {SvgXml} from 'react-native-svg';
import Image from '../../atoms/image/image';
import Button from '../../molecules/button/button';

const WIDTH = Dimensions.get('window').width;

function Walkthrough({pages, closeAction}) {
  const scrollView = useRef(null);
  const [page, setPage] = useState(0);

  function changePage() {
    if (page < pages.length - 1) {
      scrollView.current.scrollTo({
        x: (page + 1) * WIDTH,
        y: 0,
        animated: true,
      });
      setPage(page + 1);
    } else {
      closeAction();
    }
  }

  return (
    <ScrollView
      style={styles.paginator}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      ref={scrollView}
      showsHorizontalScrollIndicator={false}>
      {pages.map((page, index) => (
        <Page
          key={index}
          text={page.text}
          image={page.image}
          buttonText={page.buttonText}
          buttonEvent={() => changePage()}
        />
      ))}
    </ScrollView>
  );
}

Walkthrough.propTypes = {
  pages: PropTypes.array.isRequired,
  closeAction: PropTypes.func.isRequired,
};

function Page({text, image, buttonText, buttonEvent}) {
  const blob = `
    <svg viewBox="35 -20 200 220" xmlns="http://www.w3.org/2000/svg">
      <path fill="#5aa897" d="M54.3,-53.1C70.2,-38.5,82.6,-19.3,76.1,-6.5C69.7,6.4,44.4,12.7,28.5,21.6C12.7,30.5,6.4,41.9,-6.9,48.8C-20.1,55.6,-40.2,58,-50.2,49.1C-60.1,40.2,-59.9,20.1,-57.6,2.3C-55.3,-15.5,-51,-31.1,-41,-45.7C-31.1,-60.3,-15.5,-73.9,1.9,-75.8C19.3,-77.6,38.5,-67.7,54.3,-53.1Z" transform="translate(100 100)" />
    </svg>
  `;

  return (
    <View style={styles.pageContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.svgContainer}>
        <View style={styles.imageContainer}>
          <Image src={image} />
        </View>
        <SvgXml xml={blob} width="140%" height="90%" />
      </View>
      <View style={styles.buttonContainer}>
        <Button value={buttonText} onPress={buttonEvent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    width: WIDTH,
    justifyContent: 'space-between',
    padding: md,
    backgroundColor: '#45526c',
  },

  paginator: {
    flex: 1,
  },

  svgContainer: {
    flex: 4,
    justifyContent: 'center',
  },

  imageContainer: {
    zIndex: 10,
    position: 'absolute',
  },

  textContainer: {
    flex: 1,
    width: WIDTH,
    padding: md,
    zIndex: 10,
    position: 'absolute',
    top: 70,
  },

  text: {
    fontSize: mdHeader,
    color: 'white',
  },

  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default Walkthrough;
