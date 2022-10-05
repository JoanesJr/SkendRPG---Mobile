import React from 'react';
import { Text, FlatList, StyleSheet, Button } from 'react-native';

import { Container } from '../Home/style';

import Header from '../../components/Header';
import ActionsI from '../../components/Actions/indexI';
import Card from '../../components/Card';

const list = [
  {
    id: 1,
    name: 'Espada +1',
    description: 'Mágica +1',
    type: 'ofensive'
  },
  {
    id: 2,
    name: 'Armor of Steel',
    description: 'CA: 16',
    type: 'defence'
  },
  {
    id: 3,
    name: 'Poison potion',
    description: 'drink poison',
    type: 'potion'
  },
  {
    id: 4,
    name: 'Rabbit foot',
    description: 'amulet of lucky',
    type: 'util'
  }
];

export default function Items({ navigation }) {
  return (
    <Container flex={1}>
      <Header title="Joanes Junior" />
      <ActionsI navigation={navigation} />

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card data={item} navigation={navigation} type="items" />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});