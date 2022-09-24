import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import ActionsF from '../../components/Actions/indexF.js';
import Card from '../../components/Card';
import { Container, FormArea } from './style';

const list = [
  {
    id: 1,
    name: 'Guerra de Clãs',
    img: 'https://criticalhits.com.br/wp-content/uploads/2021/05/gojo-seis-olhos.jpg'
  },
  {
    id: 2,
    name: 'Armagedom',
    img: 'https://i.pinimg.com/originals/0a/cb/b3/0acbb35e0bab6af2fb75a3ad560b9e70.png'
  },
  {
    id: 3,
    name: 'One Piece',
    img: 'https://i.pinimg.com/originals/0c/3b/37/0c3b3706c269e6a056d15ff930614d50.jpg'
  }
];

export default function CreateR({ navigation }) {
 return (
   <Container flex={1}>
     <Header title="Joanes Junior" navigation={navigation} stack={true} />
     <ActionsF navigation={navigation} />

     <FlatList
       style={styles.list}
       data={list}
       keyExtractor={(item) => String(item.id)}
       showsVerticalScrollIndicator={false}
       renderItem={({ item }) => <Card data={item} />}
     />
   </Container>
  );
}


const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});