import React from 'react';
import { View } from 'react-native';

import { Container, Img, Text, TextArea, TextContainer } from './style';

export default function Card({ data, navigation, type }) {

  const select = () => {
    type == 'habilities' && navigation.navigate("EditHability", {id: 1});
    type == 'ficha' && navigation.navigate("EditFicha", {id: 1});
    type == 'items' && navigation.navigate("EditItem", {id : 1});

    // Abrir modal de descrição
  }

  return (
    <Container activeOpacity={0.7} onPress={select} >
      {data.img && <View>
        <Img source={{ uri: data.img }} />
      </View>
      }
      <TextArea>
        {data.name && <TextContainer>
          <Text>{data.name}</Text>
        </TextContainer> }
        {data.rpg && <TextContainer>
          <Text>{data.rpg}</Text>
        </TextContainer> }
        
        {String(data.nivel) && data.nivel != undefined && <TextContainer>
          <Text>{String(data.nivel)}</Text>
        </TextContainer>}
       
        {data.type && <TextContainer>
          <Text>{data.type}</Text>
        </TextContainer>}
      
      </TextArea>

    </Container>
  );
}