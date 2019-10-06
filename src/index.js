import React from 'react';
import { StatusBar } from 'react-native'
import { View } from 'react-native';
import Routes from './routes'

import './config/ReactotronConfig'

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#3c577c"/>
      <Routes />
    </>
  );
}
