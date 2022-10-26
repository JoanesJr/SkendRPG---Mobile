import React, {useEffect, useState} from 'react';
import {  Text, FlatList, StyleSheet, Button } from 'react-native';
import api from "../../api/api"

import  { Container } from'./style';

import Header from '../../components/Header';
import Actions from '../../components/Actions';
import Card from '../../components/Card';


export default function Home({ navigation }) {

  const [list, setList] = useState(null);

  useEffect( () => {
    const user_id = 1;
    const rpg_id = 1;

    const get = async () => {
     const {data} = await api.get(`token?user_id=${user_id}&rpg_id=${rpg_id}`)
    setList(data);
    }

    get();

    
  }, [list]);

 return (
   <Container flex={1} >
        <Header title="Joanes Junior" />
        <Actions navigation={navigation} />
     <FlatList
       style={styles.list}
       data={list}
       keyExtractor={(item) => String(item.id)}
       showsVerticalScrollIndicator={false}
       renderItem={({ item }) => <Card data={item} navigation={navigation} type='ficha' />}
     />
   </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});