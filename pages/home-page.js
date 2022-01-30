import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Thumbnail from '../components/molecules/thumbnail/thumbnail';
import Button from '../components/molecules/button/button';
import {Invoker} from '../utils';
import {lgText} from '../constants/text-sizes';
import {xs} from '../constants/sizes';
import PageLayout from '../layouts/page-layout';
import ProductDetails from '../components/organisms/product-details/product-details';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResponseFailed, setIsResponseFailed] = useState(false);
  const [bonsaiList, setBonsaiList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isGettingMore, setIsGettingMore] = useState(false);
  const [itemsOnCart, setItemsOnCart] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(async () => {
    getBonsaiList(page);

    return function cleanup() {
      showProductModal(false);
    };
  }, []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 180,
      offset: 180 * index,
      index,
    }),
    [],
  );

  async function getBonsaiList(page) {
    if (page == 1) setIsLoading(true);
    setIsResponseFailed(false);

    let baseUrl = 'http://127.0.0.1:3000';
    let endPoint = 'bonsaiList';
    let params = {
      _page: page,
      _limit: 15,
    };
    let response = await Invoker.callService(baseUrl, endPoint, params);

    if (!response.error) {
      requestSuccess([...bonsaiList, ...response.result]);
    } else {
      requestFailed(response.error);
    }
  }

  function requestSuccess(response) {
    if (response.length === 0) {
      setIsLastPage(true);
    }
    setBonsaiList(response);
    setPage(page + 1);
    setIsLoading(false);
    setIsResponseFailed(false);
    setIsGettingMore(false);
  }

  function requestFailed(err) {
    console.error(err);
    setIsLoading(false);
    setIsResponseFailed(true);
    setIsGettingMore(false);
  }

  function loadMore() {
    setIsGettingMore(true);
    getBonsaiList(page + 1);
  }

  const renderFooter = React.memo(() => {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" color="#5aa897" />
      </View>
    );
  });

  if (isResponseFailed) {
    return (
      <View style={[styles.content, styles.centered]}>
        <MaterialCommunityIcons
          name="emoticon-sad-outline"
          color={'#ababab'}
          size={128}
        />
        <Text style={styles.errorText}>Request is failed</Text>
        <Button
          value="Refresh"
          buttonStyle={{backgroundColor: '#5aa897'}}
          textStyle={{color: 'white'}}
          onPress={() => getBonsaiList(page)}
        />
      </View>
    );
  }

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{width: '32%'}}
      onPress={() => {
        setProductDetails(item);
        setShowProductModal(true);
      }}>
      <Thumbnail plant={item} />
    </TouchableOpacity>
  );

  function closeProductDetails() {
    setProductDetails(null);
    setShowProductModal(false);
  }

  if (isLoading) {
    return (
      <View style={[styles.content, styles.centered]}>
        <ActivityIndicator size="large" color="#5aa897" />
        <Text style={styles.errorText}>Loading</Text>
      </View>
    );
  }

  return (
    <PageLayout>
      <ActivityIndicator />
      <FlatList
        data={bonsaiList}
        renderItem={renderItem}
        keyExtractor={item => item['id']}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        onEndReached={!isLastPage && !isGettingMore ? loadMore : null}
        ListFooterComponent={isGettingMore ? renderFooter : null}
        removeClippedSubviews
        ListFooterComponentStyle={styles.footer}
        windowSize={12}
        getItemLayout={getItemLayout}
        onEndReachedThreshold={0.5}
      />

      <ProductDetails
        product={productDetails}
        toggleProductDetailModal={showProductModal}
        closeModal={closeProductDetails}
      />
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    textAlign: 'center',
    fontSize: lgText,
    marginBottom: xs,
  },

  footer: {
    flex: 1,
    padding: 20,
  },
});

export default HomePage;
