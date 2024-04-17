import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native'; // Importe o componente Image corretamente
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';
import ImageLogo from '../components/ImageLogo';

import {useUser} from '../contexts/UserContext';

const Login = () => {
  const navigation = useNavigation();
  const {setSigned} = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Cadastrar'); // Navega para a tela de Login
  };
  const handleGoMenu = () => {
    navigation.navigate('Home'); // Navega para a tela Principal do app
  };

  const handleCalcular = () => console.log('Salvo');

  return (
    <Container>
      <Header title={'Login'} />
      <Body>
        <ImageLogo>
        </ImageLogo>
        <Input 
          label="Email" 
          value= {email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email"/>}
        />
        <Input 
          label="Senha"
          value= {password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key"/>}  
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonC}
            mode="contained"
            onPress={(handleCalcular)}>
            Cancelar
          </Button>
          <Button
            style={styles.buttonR}
            mode="contained"
            onPress={() => setSigned(true)}>
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
