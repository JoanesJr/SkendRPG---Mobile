import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Container, Line, ContainerTitle, ContainerStatus } from './style';

export default function StatusBloco({ title }) {
    const [status, setStatus] = useState(10);
    const [modificator, setModificator] = useState(0);
    const [operator, setOperator] = useState("");

    const changeStatus = (value) => {
        if (value > 11) {
            setOperator("+");
        } else {
            setOperator("");
        }

        let mod = 0;
        if (value > 11 || value < 10) {
            mod = Math.floor((value - 10) / 2)
        } else {
            mod = 0;
        }
        console.log(value)
        setModificator(mod);
        setStatus(value.replace(/ /g, ""));
    }


    return (
        <Container>
            <ContainerStatus flex={3} style={styles.separator}>
                <Text style={styles.modificator} > {operator} {modificator} </Text>
                <Line></Line>
            </ContainerStatus>
            <ContainerStatus flex={4} style={styles.separator}>
                <TextInput style={styles.value} keyboardType="numeric" onChangeText={changeStatus} value={status} />
            </ContainerStatus>
            <ContainerTitle flex={1}>
                <Text> {title}</Text>
            </ContainerTitle>

        </Container>
    );
}

const styles = StyleSheet.create({
    modificator: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});