import React from 'react';
import { Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { ActionButton, AreaButton, TextArea } from './style';

export default function ActionScroll({ icon, label, size, color, fontSize, colorText, navigation, to }) {
    if (!to) {
        to = 'Home'
    }
 return (
     <ActionButton onPress={() => navigation?.navigate(to)}>
         <AreaButton>
             <AntDesign name={icon} size={size} color={color} />
         </AreaButton>
         <TextArea>
             <Text style={{ color: colorText, fontSize: fontSize }} >{label}</Text>
         </TextArea>
         
     </ActionButton>
  );
}