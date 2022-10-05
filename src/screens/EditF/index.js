import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import Ficha from '../../components/Ficha';

import { Container } from '../Home/style';

export default function EditF({ navigation, route }) {
 return (
    <Container flex={1}>
      <Header stack={true} navigation={navigation} title="SkendRPG"  />

      <Ficha navigation={navigation} buttonText="Editar" edit={true} />
    </Container>
   
  );
}