import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  const CustomTabBarButton = () => {
    return (
      <TouchableOpacity
        style={{
          width: 58,
          height: 58,
          backgroundColor: '#5c3ebc',
          borderRadius: 33,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -8,
          borderWidth: 3,
          borderColor: 'white',
        }}
      >
        <Entypo name='list' size={32} color='#ffd00c' />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName='Ana Sayfa'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name='Ana Sayfa'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='search' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='List'
        component={HomeNavigator}
        options={{
          tabBarButton: CustomTabBarButton,
        }}
      />
      <Tab.Screen
        name='User'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Gift'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='gift' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RootNavigator;
