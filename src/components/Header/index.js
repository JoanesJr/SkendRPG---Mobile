import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';

import { Container, UserName, UserContainer, LogoContainer } from './style';

export default function Header({ title, navigation, stack }) {

 return (
     <Container>
        <StatusBar />
         {stack && <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={27} color="#FFF" />
            </TouchableOpacity>}
         
         <UserContainer>
             <UserName>{ title } </UserName>
         </UserContainer>
         <LogoContainer activeOpacity={0.5} >
            <Feather name="user" size={27} color="#FFF" />
         </LogoContainer>     
     </Container>
  );
}