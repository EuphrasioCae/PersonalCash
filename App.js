import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Main from './src/navigations/Main';
import CadastrarConta from './src/pages/CadastrarConta';
import Login from './src/pages/Login';


const App = () => {

  return (
    <NavigationContainer>
     <CadastrarConta />
    </NavigationContainer>
  )

}



export default App;
