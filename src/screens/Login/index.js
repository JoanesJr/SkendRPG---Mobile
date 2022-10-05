import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Container, Input, FormArea, ButtonsArea, BtnLogin } from './style';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Container>
            <View>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2532/2532638.png' }} style={{ width: 150, height: 150 }} />
            </View>

            <FormArea>
                <Input placeholder=" E-mail" autoCorrect={false} value={email} onChangeText={(e) => setEmail(e)} />
                <Input placeholder="Senha" autoCorrect={false} secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} />
            </FormArea>

            <ButtonsArea>
                <BtnLogin activeOpacity={0.8} onPress={() => navigation.navigate('Home')} >
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
    }
});