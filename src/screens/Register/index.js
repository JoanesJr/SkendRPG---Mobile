import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Container, Input, FormArea, ButtonsArea, BtnLogin } from './style';

export default function Register({ navigation }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setconfirmedPassword] = useState("");
    return (
        <Container>
            <View>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2532/2532638.png' }} style={{ width: 150, height: 150 }} />
            </View>

            <FormArea>
                <Input placeholder="Nome" autoCorrect={false} onChangeText={(e) => setName(e)} value={name} />
                <Input placeholder="Sobrenome" autoCorrect={false} onChangeText={(e) => setSurname(e)} value={surname} />
                <Input placeholder="E-mail" autoCorrect={false} onChangeText={(e) => setEmail(e)} value={email} />
                <Input placeholder="Senha" autoCorrect={false} secureTextEntry={true} onChangeText={(e) => setPassword(e)} value={password} />
                <Input placeholder="Confirmação de Senha" autoCorrect={false} secureTextEntry={true} onChangeText={(e) => setPassword(e)} value={confirmedPassword} />
            </FormArea>

            <ButtonsArea>
                {/* <BtnLogin activeOpacity={0.8} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.btnText}>Entrar</Text>
                </BtnLogin> */}
                <BtnLogin activeOpacity={0.8} style={{ backgroundColor: '#F3D232'}} onPress={() => navigation.navigate('Login')} >
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
    }
});