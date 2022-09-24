import React from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';


import ActionScroll from '../ActionScroll';

import { Container } from '../Header/style';

export default function ActionsF({ navigation }) {
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container} >
                <ActionScroll icon="addfolder" size={27} label="Criar RPG" color="black" colorText="white" navigation={navigation} to="CreateRRPG" />
                <ActionScroll icon="folder1" size={27} label="RPG" color="black" colorText="white" navigation={navigation} to="CreateR" />
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