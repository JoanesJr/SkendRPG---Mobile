import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Header from '../../components/Header';
import { Container, Input, FormArea, ButtonsArea, BtnLogin, InputFile, BtnAdd } from '../Login/style';

export default function CreateItem({ navigation, route }) {

    const edit = route.params ? false : true;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState(0);

    return (
        <>
            <Header title="SkendRPG" stack={true} navigation={navigation} />
            <Container>

                <View>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2532/2532638.png' }} style={{ width: 150, height: 150 }} />
                </View>

                <FormArea>
                    <Input placeholder="Nome" autoCorrect={false} value={name} onChangeText={(e) => setName(e)} />
                    <Input style={{ height: 150, textAlignVertical: 'top' }} placeholder="Descrição" autoCorrect={false} value={description} onChangeText={(e) => setDescription(e)} multiline={true}
                        numberOfLines={20} />
                    <Input keyboardType='numeric' placeholder="Tipo" autoCorrect={false} value={type} onChangeText={(e) => setType(e)} />
                </FormArea>

                <ButtonsArea>
                    <BtnAdd activeOpacity={0.8} onPress={() => navigation.navigate('EditFicha')} >
                        <Text style={styles.btnText}>{edit ? 'Adicionar' : 'Editar'}</Text>
                    </BtnAdd>
                </ButtonsArea>
            </Container>
        </>

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
    textFile: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        paddingTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: 'red'
    }

});