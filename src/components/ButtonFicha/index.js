import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './style';

export default function ButtonFicha( {title, color, icon, navigation, background, to} ) {
 return (
   <>
    <Button style={{ backgroundColor: background }} onPress={() => navigation.navigate(to)} >
        <Text style={{ color: color, fontWeight: 'bold' }} >{title}</Text>
    </Button>
   </>
  );
}