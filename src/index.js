import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#9F70C5" />
    <Routes />
  </>
);

export default App;
