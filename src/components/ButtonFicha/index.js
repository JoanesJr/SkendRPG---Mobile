import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './style';

export default function ButtonFicha( {title, color, icon, navigation, background, press, edit} ) {
 return (
   <>
    <Button style={{ backgroundColor: background }} onPress={press} >
        <Text style={{ color: color, fontWeight: 'bold' }} >{title}</Text>
    </Button>
   </>
  );
}