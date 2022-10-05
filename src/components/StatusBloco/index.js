import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Container, Line, ContainerTitle, ContainerStatus } from './style';

export default function StatusBloco({ title, edit, value }) {
    const [status, setStatus] = useState(value);
    const [modificator, setModificator] = useState(0);
    const [operator, setOperator] = useState("");

    if (edit) {
        useEffect(() => {
            changeMod(value);
        }, []);
    }
   

    function changeStatus(value) {
        changeMod(value)
        setStatus(value.replace(/ /g, ""));
    }

    function changeMod(value) {
        if (value > 11) {
            setOperator("+");
        } else {
            setOperator("");
        }

        let mod = 0;
        if (value > 11 || value < 10) {
            mod = Math.floor((value - 10) / 2);
        } else {
            mod = 0;
        }
        setModificator(mod);
    }


    return (

        <>
            {edit ? 
            
                <Container>
                    <ContainerStatus flex={3} style={styles.separator}>
                        <Text style={styles.modificator} > {operator} {modificator} </Text>
                        <Line></Line>
                    </ContainerStatus>
                    <ContainerStatus flex={4} style={styles.separator}>
                        <TextInput style={styles.value}>{status}</TextInput>
                    </ContainerStatus>
                    <ContainerTitle flex={1}>
                        <TextInput> {title}</TextInput>
                    </ContainerTitle>
                </Container>
            
            :
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
            }
        </>



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