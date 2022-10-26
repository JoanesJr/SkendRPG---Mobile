import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import ActionsF from '../../components/Actions/indexF.js';
import Card from '../../components/Card';
import { Container, FormArea } from './style';
import api from "../../api/api"

// const list = [
//   {
//     id: 1,
//     name: 'Guerra de Clãs',
//     img: 'https://cdn-icons-png.flaticon.com/512/2619/2619285.png'
//   },
//   {
//     id: 2,
//     name: 'Armagedom',
//     img: 'https://img2.gratispng.com/20180727/bfy/kisspng-role-playing-game-computer-icons-role-play-5b5b9461491d67.5348043115327284172995.jpg'
//   },
//   {
//     id: 3,
//     name: 'One Piece',
//     img: 'https://i.pinimg.com/564x/ce/57/64/ce5764850b07a3453fdf74e29f6e4c46.jpg'
//   }
// ];

export default function CreateR({ navigation }) {
  const [list, setList] = useState(null);

  useEffect(() => {

    const getAll = async () => {
      await api.get(`rpg?id=1`).then(({data}) => {
        setList(data);
      }).catch(({response}) => {
        console.log("deu ruim");
        // console.log(response);
      });
    }

    getAll();

  }, [list]);

 return (
   <Container flex={1}>
     <Header title="Joanes Junior" navigation={navigation} stack={true} />
     <ActionsF navigation={navigation} />

     <FlatList
       style={styles.list}
       data={list}
       keyExtractor={(item) => String(item.id)}
       showsVerticalScrollIndicator={false}
       renderItem={({ item }) => <Card data={item} type="rpg" />}
     />
   </Container>
  );
}


const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});