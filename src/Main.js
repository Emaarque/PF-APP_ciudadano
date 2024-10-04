// src/Main.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";

const Main = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Main;
