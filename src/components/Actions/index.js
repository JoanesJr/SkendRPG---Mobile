import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';


import ActionScroll from '../ActionScroll';

import { Container } from '../Header/style';

export default function Actions({ navigation }) {
 return (
    <View>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container} >
             <ActionScroll icon="adduser" size={27} label="Criar Ficha" color="black" colorText="white" navigation={navigation} to="CreateF" />
             <ActionScroll icon="folder1" size={27} label="RPG" color="black" colorText="white" navigation={navigation} to="CreateR" />
             {/* <ActionScroll icon="addfolder" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" />
             <ActionScroll icon="addfolder" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" />
             <ActionScroll icon="addfolder" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" />
             <ActionScroll icon="tagso" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" />
             <ActionScroll icon="addfolder" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" />
             <ActionScroll icon="addfolder" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" />
             <ActionScroll icon="tagso" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" />
             <ActionScroll icon="tagso" size={27} label="Entradas" color="black" colorText="white" navigation={navigation} to="" /> */}
         </ScrollView>
    </View>
         
     
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 150,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 18,
        paddingStart: 18,
        marginTop: -50,
    },
   
});