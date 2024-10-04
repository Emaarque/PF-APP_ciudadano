// src/navigation/AppStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* import HomeScreen from "../screens/HomeScreens";
import DashboardScreen from '../screens/DashboardScreen';*/
import MainNavigator from './MainNavigator'; // Importamos el MainNavigator

// Importa más pantallas autenticadas

const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainNavigator} />
    {/* <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="Home" component={HomeScreen} /> */}
    {/* Agrega más pantallas autenticadas */}
  </Stack.Navigator>
);

export default AppStack;
