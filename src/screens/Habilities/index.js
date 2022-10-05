import React from 'react';
import { Text, FlatList, StyleSheet, Button } from 'react-native';

import { Container } from '../Home/style';

import Header from '../../components/Header';
import ActionsH from '../../components/Actions/indexH';
import Card from '../../components/Card';

const list = [
  {
    id: 1,
    name: 'HomeBrow',
    description: 'Descrição',
    nivel: 0
  },
  {
    id: 2,
    name: 'Inversão da Casualidade',
    description: 'Poder dos bons',
    nivel: 1
  },
  {
    id: 3,
    name: 'Elektron Fire',
    description: 'Fogo atomico',
    nivel: 2
  }
];

export default function Habilities({ navigation }) {
  return (
    <Container flex={1}>
      <Header title="Joanes Junior" />
      <ActionsH navigation={navigation} />

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card data={item} navigation={navigation} type="habilities" />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});