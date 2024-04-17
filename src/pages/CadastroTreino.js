import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import { Picker } from '@react-native-community/picker';
import { Appbar, TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';
import { insertTreinos, updateTreinos } from '../services/WorkoutServices';
import { getClientes } from '../services/ClientesServicesDB';

const CadastroTreino = (route) => {
  const navigation = useNavigation();
  const { treino } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [inicio, setInicio] = useState('');
  const [duracao, setDuracao] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    if (treino) {
      setNome(treino.nome);
      setData(treino.data);
      setInicio(treino.inicio);
      setDuracao(treino.duracao);
      setValor(treino.valor.tofixed(2));
    }
  }, [treino]);

  const handleCalcular = () => {
    if (treino) {
      console.log(treino);

      updateTreinos({
        nome: nome,
        data: data,
        inicio: inicio,
        duracao: duracao,
        valor: valor,
        id: treino.id
      }
      ).then();
    } 
    else {
      insertTreinos({
        nome: nome,
        data: data,
        inicio: inicio,
        duracao: duracao,
        valor: valor
      }
      ).then();
    }
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'Cadastro de Treino'} goBack={() => navigation.goBack()} />
      <Body>
        <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24hour={true}
            display="default"
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format('DD/MM/YYYY'));
            }}
          />
        )}
        <TouchableOpacity onPress={() => setShow(true)}>
          <Input label="Data" value={data} editable={false} />
        </TouchableOpacity>
        <Input
          label="Início"
          value={inicio}
          onChangeText={(text) => setInicio(text)}
        />
        <Input
          label="Duração"
          value={duracao}
          onChangeText={(text) => setDuracao(text)}
          keyboardType="numeric" // Apenas números
        />
        <Input
          label="Valor do treino"
          value={valor}
          onChangeText={(text) => setValor(text)}
          keyboardType="numeric" // Apenas números
        />
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
            Registrar
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
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

export default CadastroTreino;
