import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {md, lg, xs, xl, sm} from '../../../constants/sizes';
import {Invoker} from '../../../utils';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  xsHeader,
  xlText,
  smHeader,
  mdText,
  lgText,
} from '../../../constants/text-sizes';
import {random} from 'lodash';
import OrderCounter from '../../atoms/order-counter/order-counter';
import Button from '../../molecules/button/button';

function ProductDetails({toggleProductDetailModal, closeModal, product}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageSource, setImageSource] = useState(null);
  const [plantAttributes, setPlantAttributes] = useState(
    randomBonsaiAttributes,
  );

  useEffect(() => {
    setModalVisible(toggleProductDetailModal);
    if (toggleProductDetailModal) {
      setImageSource(product.image);
      getHighQualityImage();
    }
  }, [toggleProductDetailModal]);

  if (!toggleProductDetailModal) {
    return <View />;
  }

  async function getHighQualityImage() {
    let baseUrl = 'http://127.0.0.1:3000';
    let endPoint = 'imageList';
    let params = {
      id: product.id,
    };
    let response = await Invoker.callService(baseUrl, endPoint, params);

    if (!response.error) {
      console.log(response);
      setImageSource(response.result[0].image);
    }
  }

  function randomBonsaiAttributes() {
    const potMaterials = ['Ceramic', 'Clay', 'Glass', 'Steel', 'Alumium'];
    const caring = ['Easy', 'Medium', 'Hard', 'Extreme'];

    const attributes = {
      height: random(10, 130),
      hasFruit: Boolean(random(1)),
      caring: caring[random(caring.length)],
      potMaterial: potMaterials[random(potMaterials.length)],
    };

    return attributes;
  }

  function attributeItem(attribute, value, icon) {
    return (
      <View style={styles.attributeContainer}>
        <Icon name={icon} size={smHeader} />
        <Text style={styles.attributeText}>
          <Text style={styles.attributeTitle}>{attribute}:</Text>
          {value}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.modalContainer}>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.header}>
          <TouchableOpacity onPress={closeModal}>
            <View>
              <Icon name={'close'} size={smHeader} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageSource,
            }}
            resizeMode="contain"
            style={{flex: 1}}
          />
        </View>
        <View style={styles.informationsContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.attributes}>
            {attributeItem(
              'Height',
              plantAttributes.height + 'cm',
              'resize-outline',
            )}
            {attributeItem(
              'Has Fruit',
              plantAttributes.hasFruit ? 'Yes' : 'No',
              'nutrition-outline',
            )}
            {attributeItem(
              'Caring',
              plantAttributes.caring,
              'color-fill-outline',
            )}

            {attributeItem(
              'Pot Material',
              plantAttributes.potMaterial,
              'cube-outline',
            )}
          </View>
        </View>

        <Button value="Add to Cart" buttonStyle={styles.buttonStyle} />
        <OrderCounter />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },

  header: {
    backgroundColor: '#5aa897',
    width: '100%',
    paddingVertical: xs,
    paddingHorizontal: md,
  },

  imageContainer: {
    height: Dimensions.get('window').height * 0.4,
    alignSelf: 'center',
  },

  title: {
    fontSize: xsHeader,
    fontWeight: 'bold',
    marginBottom: md,
    textAlign: 'center',
  },

  informationsContainer: {
    padding: md,
    alignItems: 'center',
  },

  attributes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  attributeContainer: {
    flexDirection: 'row',
    height: xl,
    alignItems: 'center',
    width: '50%',
  },

  attributeText: {
    marginLeft: sm,
    fontSize: mdText,
  },

  attributeTitle: {
    fontWeight: '700',
    color: '#444',
  },

  buttonStyle: {
    width: '95%',
    maxWidth: 500,
    alignSelf: 'center',
    paddingHorizontal: md,
    position: 'absolute',
    bottom: md,
    backgroundColor: '#5aa897',
  },
});

export default ProductDetails;
