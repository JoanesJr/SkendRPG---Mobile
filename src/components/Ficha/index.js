import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { 
    Container, 
    TextInput, 
    ContainerInputs, 
    InputFile, 
    ContainerStatus, 
    Title, 
    Status,
    ContainerButtons,
    Button,
TextInputArmor,
TextInputEnergy,
TextInputLife } from './style';

import StatusBloco from '../StatusBloco';
import ButtonFicha from '../ButtonFicha';

export default function Ficha({ navigation, buttonText, edit }) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [tendency, setTendency] = useState("");
    const [race, setRace] = useState("");
    const [classy, setClassy] = useState("");
    const [life, setLife] = useState("");
    const [energy, setEnergy] = useState("");
    const [armor, setArmor] = useState("10");
    const [level, setlevel] = useState("1");
    const [xp, setXP] = useState("0");
    const [proficiency, setProficiency] = useState("2");

    useEffect(() => {
        if (edit) setImage("https://media.techtribune.net/uploads/2022/02/jujutsu-kaisen-satoru-gojo-anime-1259613.jpg");
    }, []);

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
            setImage("https://static.wikia.nocookie.net/kimetsu-no-yaiba-fan/images/3/35/Kokushibo_Anime_profile_%28human%29.png/revision/latest?cb=20210126170356");
        }
    };

    return (
        <Container flex={1}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <ContainerInputs>
                    <TextInput placeholder="Nome" value={name} />
                    <TextInput placeholder="Idade" keyboardType='numeric' value={age} />
                    {
                        image ? <InputFile onPress={pickImage}>
                            <Image style={{ height: 100, width: 100 }} source={{ uri: image }} />
                        </InputFile>
                            : <InputFile onPress={pickImage}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }} >Imagem</Text>
                            </InputFile>
                    }

                </ContainerInputs>
                <ContainerInputs>
                    <TextInput  placeholder="Alinhamento" value={tendency} />
                    <TextInput  placeholder="Raça" keyboardType='text' value={race} />
                    <TextInput  placeholder="Classe" keyboardType='text' value={classy} />
                </ContainerInputs>
                <ContainerInputs>
                    <TextInputLife  placeholder="Vida" keyboardType='numeric' value={life} />
                    <TextInputEnergy  placeholder="Energia" keyboardType='numeric' value={energy} />
                    <TextInputArmor  placeholder="Defesa" keyboardType='numeric' value={armor} />
                </ContainerInputs>
                <ContainerStatus>
                    <StatusBloco title="Força" value={14} edit={edit} />
                    <StatusBloco title="Destreza" value={20} edit={edit} />
                    <StatusBloco title="Constituição" value={16} edit={edit} />
                </ContainerStatus>
                <ContainerStatus>
                    <StatusBloco title="Inteligência" value={8} edit={edit} />
                    <StatusBloco title="Sabedoria" value={12} edit={edit} />
                    <StatusBloco title="Carisma" value={10} edit={edit} />
                </ContainerStatus>
                {/* <ContainerButtons>
                    <ButtonFicha title="Itens" color="white" background="#BBA227" icon="" to="Home" navigation={navigation} />
                    <ButtonFicha title="Habilidades" color="white" background="#A8171D" icon="" to="Habilities" navigation={navigation} />
                    <ButtonFicha title="Informações" color="white" background="#1B1887" icon="" to="Home" navigation={navigation} />
                </ContainerButtons> */}
                <ContainerButtons>
                    <TextInput placeholder="Level" keyboardType='numeric' value={level} />
                    <TextInput placeholder="XP" keyboardType='numeric' value={xp} />
                    <TextInput placeholder="Proficiência" keyboardType='numeric' value={proficiency} />
                </ContainerButtons>

                <ContainerButtons style={edit ? styles.edit : ''}>
                    <ButtonFicha title={buttonText} edit={edit} color="white" background="#BBA227" icon="" to="Home" navigation={navigation} data="" />
                </ContainerButtons>

            </ScrollView>
        </Container>
    );
}


const styles = StyleSheet.create({
    edit: {
        marginBottom: -5
    }
});