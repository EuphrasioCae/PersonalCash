import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native'; // Importe o componente Image corretamente
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';
import LogoTransparente from '../assets/LogoTransparente.png';

const Login = () => {
  const navigation = useNavigation();

  const handleCalcular = () => console.log('Salvo');

  const handleLoginPress = () => {
    navigation.navigate('CadastrarConta'); // Use navigate em vez de window.location
  };

  return (
    <Container>
      <Header title={'Login'} />
      <Body>
        <View style={styles.imageContainer}>
          {/* Use o componente Image para renderizar a imagem */}
          <Image source={LogoTransparente} style={styles.logo} />
        </View>
        <Input label="Email" />
        <Input label="Senha" />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonC}
            mode="contained"
            onPress={handleCalcular}>
            Cancelar
          </Button>
          <Button
            style={styles.buttonR}
            mode="contained"
            onPress={handleCalcular}>
            Logar
          </Button>
        </View>
        <View style={styles.legenda}>
          <Text style={{ marginLeft: 10 }}>Ainda não tem conta?</Text>
          <Button style={{ marginLeft: 15 }} onPress={handleLoginPress}>
            Cadastrar
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200, // Defina a largura da imagem
    height: 200, // Defina a altura da imagem
  },
  legenda: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonR: {
    backgroundColor: 'green',
    marginTop: 5,
    flex: 1,
    marginLeft: 15,
  },
  buttonC: {
    backgroundColor: 'red',
    marginTop: 5,
    flex: 1,
    marginRight: 15,
  },
});

export default Login;
