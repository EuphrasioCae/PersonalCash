import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone necessário


import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

import { insertPerfil, updatePerfil} from '../services/PerfilServices';

const Perfil = ( route ) => {

  const { perfil } = route.params ? route.params : {};

  const handleCancel = () =>{
    setNome('');
    setEmail('');
    setPassword('');
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (perfil) {
      setNome(perfil.nome);
      setEmail(perfil.email);
      setPassword(perfil.password);
    }
  }, [perfil]);

  const handleCalcular = () => {
    if(perfil){
      //console.log(perfis);

      updatePerfil(
        {
          nome: nome,
          email: email,
          password: password,
          id: perfil.id
        }
      ).then();
      
    }else{
      insertPerfil(
        {
          nome: nome,
          email: email,
          password: password
        }
      ).then();
    }
    };

  return (
    <Container>
      <Header title={'Perfil'} />
      <Body>
      <View style={styles.iconContainer}>
          <Icon name="account-circle" size={125} color="black" />
      </View>
      <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
      />
      <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
      />
      <Input
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
          <Button style={styles.buttonC} mode="contained" onPress={handleCancel}>
            Cancelar
          </Button>
          <Button style={styles.buttonR} mode="contained" onPress={handleCalcular}>
            Editar
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
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

export default Perfil;