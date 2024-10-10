// src/screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';
import LogoutButton from '../components/LogoutButton';
import Navbar from '../components/Navbar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar title="Inicio" />
      <View style={styles.content}>
        <Title>Bienvenido a la aplicación</Title>
        <LogoutButton />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('ReclamoList')}
          style={styles.button}
        >
          Ver Reclamos Realizados
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;

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
  button: {
    marginTop: 20,
  },
});
