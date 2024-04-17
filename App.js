import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

//import Main from './src/navigations/Main';
import Route from './src/navigations/Route';

import UserProvider from './src/contexts/UserContext';

const App = () => {

  return (
    <UserProvider>
    <NavigationContainer>
     <Route />
    </NavigationContainer>
    </UserProvider>
  )

}

export default App;
