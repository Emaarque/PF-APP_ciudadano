// src/screens/LoginScreen.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Title,
  Paragraph,
  ActivityIndicator,
} from "react-native-paper";
import { useLoginMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user = await login({ email, password }).unwrap();
      await AsyncStorage.setItem("jwt_token", user.token);
      dispatch(setCredentials({ user: user.user, token: user.token }));
      // Navega al área protegida si es necesario
      navigation.replace('Main'); // Asegúrate de que 'Home' es el nombre correcto de tu pantalla
    } catch (err) {
      console.error('Error en el login:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Iniciar Sesión</Title>
      {error && (
        <Paragraph style={styles.error}>
          {error.data?.message || "Error al iniciar sesión"}
        </Paragraph>
      )}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        loading={isLoading}
        disabled={isLoading}
        style={styles.button}
      >
        Ingresar
      </Button>
      {isLoading && <ActivityIndicator />}
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
});
