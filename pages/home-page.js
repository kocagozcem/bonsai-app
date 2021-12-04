import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Thumbnail from '../components/molecules/thumbnail/thumbnail';
import Button from '../components/molecules/button/button';
import {Invoker} from '../utils';
import {lgText} from '../constants/text-sizes';
import {xs} from '../constants/sizes';
import {result} from 'lodash';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResponseFailed, setIsResponseFailed] = useState(false);
  const [bonsaiList, setBonsaiList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isGettingMore, setIsGettingMore] = useState(false);
  const [itemsOnCart, setItemsOnCart] = useState([]);

  useEffect(async () => {
    setItemsOnCart([]);
    getBonsaiList(page);
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

  async function getAllFromStorage() {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  }

  function checkIfInChart(item) {
    return itemsOnCart.includes(item.name);
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
    <View style={{width: '32%'}}>
      <Thumbnail plant={item} isInCart={checkIfInChart(item)} />
    </View>
  );

  if (isLoading) {
    return (
      <View style={[styles.content, styles.centered]}>
        <ActivityIndicator size="large" color="#5aa897" />
        <Text style={styles.errorText}>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.content}>
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
        ListFooterComponentStyle={{
          flex: 1,
          padding: 20,
        }}
        windowSize={12}
        getItemLayout={getItemLayout}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    textAlign: 'center',
    fontSize: lgText,
    marginBottom: xs,
  },
});

export default HomePage;
