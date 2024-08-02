import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StoreScreen from '../screens/StoreScreen';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Leaderboard') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Store') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#F0F0F0', // Match your categoryCard background
          paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Adjust for iOS visual consistency
          height: 60, // Reduce tab bar size
        },
        tabBarLabelStyle: {
          fontSize: 12, // Adjust label font size
        },
        headerShown: false, // Assuming you want to hide the header
      })}
    >
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
