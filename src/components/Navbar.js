// src/components/Navbar.js
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const Navbar = ({ title }) => {
  const navigation = useNavigation();

  const canGoBack = navigation.canGoBack();

  const goBack = () => {
    if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        BackHandler.exitApp();
      }
    
  };

  return (
    <Appbar.Header>
       {/*  {canGoBack && <Appbar.BackAction onPress={goBack} />} */}
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Navbar;
