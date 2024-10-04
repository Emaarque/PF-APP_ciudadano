// src/navigation/MainNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreens";
import DashboardScreen from '../screens/DashboardScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // O 'react-native-vector-icons/MaterialCommunityIcons' si no usas Expo

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Dashboard') {
            iconName = 'view-dashboard';
          } else if (route.name === 'Notifications') {
            iconName = 'bell';
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6200ee',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Inicio' }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarLabel: 'Dashboard' }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Notificaciones' }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;