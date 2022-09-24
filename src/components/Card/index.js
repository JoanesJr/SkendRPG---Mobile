import React from 'react';
import { View } from 'react-native';

import { Container, Img, Text, TextArea } from './style';

export default function Card( { data }) {
 return (
      <Container activeOpacity={0.7}>
       <View>
         <Img source={{ uri: data.img }} />
       </View>
     <TextArea>
          <Text>{data.name}</Text>
          <Text>{data.rpg}</Text>
     </TextArea>
       
      </Container>
  );
}