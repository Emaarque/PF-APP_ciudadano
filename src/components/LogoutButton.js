// src/components/LogoutButton.js
import React from "react";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import * as SecureStore from "expo-secure-store";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("jwt_token");
    dispatch(logout());
    // Navega a la pantalla de login si es necesario
  };

  return (
    <Button onPress={handleLogout} mode="contained">
      Cerrar Sesión
    </Button>
  );
};

export default LogoutButton;
