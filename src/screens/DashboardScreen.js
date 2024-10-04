// src/screens/DashboardScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import Navbar from '../components/Navbar';

const DashboardScreen = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Navbar title="Dashboard" />
      <View style={styles.content}>
        <Title>Dashboard</Title>
        <Button mode="contained" onPress={navigateToHome}>
          Ir a Inicio
        </Button>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
