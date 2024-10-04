// src/screens/NotificationsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Notificaciones</Title>
      {/* Aquí puedes agregar el contenido de las notificaciones */}
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
