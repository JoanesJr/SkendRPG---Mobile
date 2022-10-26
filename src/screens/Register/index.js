import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../api/api';
import ValidationErrors from '../../services/ValidationErrors';

import { Container, Input, FormArea, ButtonsArea, BtnLogin, InputFile } from './style';

export default function Register({ navigation }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [fileStorage, setFileStorage] = useState("");
    const [register, setRegister] = useState(false);

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorSurname, setErrorSurname] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmedPassword, setErrorConfirmedPassword] = useState(false);



    const createUser = async () => {
        setErrorSurname(false);
        setErrorEmail(false);
        setErrorPassword(false);
        setErrorConfirmedPassword(false);
        setErrorName(false);

        const data = {
            name,
            surname,
            email,
            password,
            confirmedPassword,
            // fileStorage
        }

         await api.post('users', data).then(({data}) => {
             setRegister(true);
             setTimeout(() => {
                 navigation.navigate('Login');
             }, 1500);
         }).catch(({response}) => {
            setErrorSurname(ValidationErrors.validate(response, "surname"));
            setErrorEmail(ValidationErrors.validate(response, "email"));
            setErrorPassword(ValidationErrors.validate(response, "password"));
            setErrorConfirmedPassword(ValidationErrors.validate(response, "confirmedPassword"));        
            setErrorName(ValidationErrors.validate(response, "name"));
        });
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setFileStorage(result.uri);
        }
    };

    return (
        <>
        { !register ? <Container>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2532/2532638.png' }} style={{ width: 150, height: 150 }} />
            </View>

            <FormArea style={{ marginTop: 50 }}>
                    <Input placeholder="Nome" autoCorrect={false} onChangeText={(e) => setName(e)} value={name} />
                    {errorName && <Text style={styles.error}>Nome deve conter no minímo 3 caracteres</Text>}
                <Input placeholder="Sobrenome" autoCorrect={false} onChangeText={(e) => setSurname(e)} value={surname} />
                    {errorSurname && <Text style={styles.error}>O Sobrenome deve conter no minímo 3 caracteres</Text>}
                <Input placeholder="E-mail" autoCorrect={false} onChangeText={(e) => setEmail(e)} value={email} />
                    {errorEmail && <Text style={styles.error}>Informe um e-mail válido.</Text>}
                <Input placeholder="Senha" autoCorrect={false} secureTextEntry={true} onChangeText={(e) => setPassword(e)} value={password} />
                    {errorPassword && <Text style={styles.error}>A Senha deve conter no minímo 6 caracteres</Text>}
                <Input placeholder="Confirmação de Senha" autoCorrect={false} secureTextEntry={true} onChangeText={(e) => setConfirmedPassword(e)} value={confirmedPassword} />
                    {errorConfirmedPassword && <Text style={styles.error}>As senhas não conferem</Text>}{
                /* <InputFile onPress={pickImage} value={fileStorage}>
                    <Text style={styles.textFile} > Imagem </Text>
                </InputFile> */}
            </FormArea>

            <ButtonsArea>
                {/* <BtnLogin activeOpacity={0.8} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.btnText}>Entrar</Text>
                </BtnLogin> */}
                <BtnLogin activeOpacity={0.8} style={{ backgroundColor: '#F3D232' }} onPress={createUser} >
                    <Text style={styles.btnText}>Registre-se</Text>
                </BtnLogin>

            </ButtonsArea>
            </Container> : <Container >
                <View style={styles.successArea}>
                    <Text style={styles.textSuccess}>Usuário Cadastrado com Sucesso!</Text>
                </View>
            </Container>}
        

        
        </>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textFile: {
        fontWeight: 'bold'
    },
    textSuccess: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#0a8967'
    },
    successArea: {
        backgroundColor: '#0d192b',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 40
    },
    error: {
        color: 'red',
        paddingLeft: 12,
        marginTop: 5
    }
});