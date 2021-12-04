import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import HomePage from './pages/home-page';
import WalkthroughPage from './pages/walkthrough-page';
import SearchPage from './pages/search-page';
import CartPage from './pages/cart-page';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HeaderBackButton} from '@react-navigation/stack';
import Logo from './components/atoms/logo/logo';

const bonsaiGreen = '#5aa897';
const options = {
  headerStyle: {
    backgroundColor: bonsaiGreen,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
};
const optionsHideHeader = {headerShown: false};

const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: bonsaiGreen,
  inactiveTintColor: 'gray',
  labelStyle: {fontWeight: 'bold', fontSize: 13},
};

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          gesturesEnabled: true,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          ...optionsHideHeader,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          ...optionsHideHeader,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor={bonsaiGreen} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Walkthrough"
            component={WalkthroughPage}
            options={optionsHideHeader}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{
              headerTitle: props => <Logo />,
              headerTitleAlign: 'center',
              headerLeft: null,
              headerStyle: {
                backgroundColor: '#f2f2f2',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
