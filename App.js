import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import HomePage from './pages/home-page';
import WalkthroughPage from './pages/walkthrough-page';
import SearchPage from './pages/search-page';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const options = {headerShown: false};
const tabBarOptions = {keyboardHidesTabBar: true};
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

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          ...options,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          ...options,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Walkthrough"
            component={WalkthroughPage}
            options={options}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={options}
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
  },
});

export default App;
