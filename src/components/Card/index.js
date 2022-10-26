import React from 'react';
import { View } from 'react-native';

import { Container, Img, Text, TextArea, TextContainer } from './style';

export default function Card({ data, navigation, type }) {


  const select = () => {

    type == 'habilities' && navigation.navigate("EditHability", {id: data.id});
    type == 'ficha' && navigation.navigate("EditFicha", {id: data.id});
    type == 'items' && navigation.navigate("EditItem", { id: data.id });
    // type == 'rpg' && navigation.navigate("EditRpg", { id: data.id });

    // Abrir modal de descrição
  }

  return (
    <Container activeOpacity={0.7} onPress={select} >
      {data.fileStorage && <View>
        <Img source={{ uri: data.fileStorage }} />
      </View>
      }
      <TextArea>
        {data.name && <TextContainer>
          <Text>{data.name}</Text>
        </TextContainer> }
        {data.rpg && <TextContainer>
          <Text>{data.rpg.name}</Text>
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