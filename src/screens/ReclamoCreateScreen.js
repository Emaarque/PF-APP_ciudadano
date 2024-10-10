// src/screens/ReclamoCreateScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  TextInput,
  Button,
  Title,
  Paragraph,
  HelperText
} from 'react-native-paper';
import Navbar from '../components/Navbar';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import * as DocumentPicker from 'expo-document-picker';

import { useCrearReclamoMutation } from '../services/reclamoApi';

const ReclamoCreateScreen = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  // Definir estados para cada campo
  const [servicio, setServicio] = useState('');
  const [area, setArea] = useState('');
  const [problema, setProblema] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [comentario, setComentario] = useState('');
  const [archivo, setArchivo] = useState(null);

  const handleSelectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setArchivo(result);
      }
    } catch (error) {
      console.error('Error al seleccionar el archivo:', error);
    }
  };


  // Función para manejar el envío del formulario
  const [crearReclamo, { isLoading, error }] = useCrearReclamoMutation();

  const handleSubmit = async () => {
    // Validar los campos antes de enviar
    if (!servicio || !area || !problema || !localidad || !calle || !numero) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
    const formData = new FormData();
    formData.append('servicio', servicio);
    formData.append('area', area);
    formData.append('problema', problema);
    formData.append('localidad', localidad);
    formData.append('calle', calle);
    formData.append('numero', numero);
    formData.append('comentario', comentario);

    if (archivo) {
      formData.append('archivo', {
        uri: archivo.uri,
        name: archivo.name,
        type: archivo.mimeType || 'application/octet-stream',
      });
    }

    try {
      const response = await crearReclamo(formData).unwrap();
      alert('Reclamo enviado con éxito.');
      // Limpiar los campos o navegar a otra pantalla
    } catch (err) {
      console.error('Error al enviar el reclamo:', err);
      alert('Error al enviar el reclamo.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Generar Reclamo</Title>

      {/* Campo Servicio */}
      <TextInput
        label="Servicio"
        value={servicio}
        onChangeText={setServicio}
        style={styles.input}
      />

      {/* Campo Área */}
      <TextInput
        label="Área"
        value={area}
        onChangeText={setArea}
        style={styles.input}
      />

      {/* Campo Problema */}
      <TextInput
        label="Problema"
        value={problema}
        onChangeText={setProblema}
        style={styles.input}
      />

      {/* Campo Localidad */}
      <TextInput
        label="Localidad"
        value={localidad}
        onChangeText={setLocalidad}
        style={styles.input}
      />

      {/* Campo Calle */}
      <TextInput
        label="Calle"
        value={calle}
        onChangeText={setCalle}
        style={styles.input}
      />

      {/* Campo Número */}
      <TextInput
        label="Número"
        value={numero}
        onChangeText={setNumero}
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Campo Comentario */}
      <TextInput
        label="Comentario"
        value={comentario}
        onChangeText={setComentario}
        style={styles.input}
        multiline
        numberOfLines={4}
      />

      {/* Botón para adjuntar archivo */}
      {/* Botón para adjuntar archivo */}
      <Button
        mode="outlined"
        onPress={handleSelectFile}
        style={styles.button}
      >
        {archivo ? 'Archivo adjuntado' : 'Adjuntar Archivo'}
      </Button>

      {/* Botón para enviar el reclamo */}
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Enviar Reclamo
      </Button>
    </ScrollView>
  );
};

export default ReclamoCreateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginVertical: 10,
  },
});
