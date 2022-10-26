import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Container, Input, FormArea, ButtonsArea, BtnLogin } from './style';
import api from "../../api/api";
import ValidationErrors from '../../services/ValidationErrors';

export default function Login({ navigation, route }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const login = async () => {
        const data = {
            email,
            password
        }

        await api.post("login", data).then(({data}) => {
            // console.log("deu bom");
            // console.log(data)
            navigation.navigate('Home');
        }).catch(({response}) => {
            // console.log('deu ruim');
            // console.log(response.data)
            setErrorEmail(ValidationErrors.validate(response, "email"));
            setErrorPassword(ValidationErrors.validate(response, "password"));
        });

       
    }

    
    return (
        <Container>
            <View>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2532/2532638.png' }} style={{ width: 150, height: 150 }} />
            </View>

            <FormArea>
                {(errorEmail || errorPassword) && <Text style={styles.error}>E-mail ou senha incorretos</Text>}
                <Input placeholder=" E-mail" autoCorrect={false} onChangeText={(e) => setEmail(e)} value={email} />
                <Input placeholder="Senha" autoCorrect={false} secureTextEntry={true} onChangeText={(e) => setPassword(e)} value={password} />
            </FormArea>

            <ButtonsArea>
                <BtnLogin activeOpacity={0.8} onPress={login} >
                    <Text style={styles.btnText}>Entrar</Text>
                </BtnLogin>
                <BtnLogin activeOpacity={0.8} style={{ backgroundColor: '#F3D232'}} onPress={() => navigation.navigate('Register')} >
                    <Text style={styles.btnText}>Registre-se</Text>
                </BtnLogin>
            </ButtonsArea>
        </Container>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        paddingLeft: 12,
        marginTop: 5
    }
});