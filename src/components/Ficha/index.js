import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
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

export default function Ficha({ navigation }) {

    const [image, setImage] = useState(null);
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
                    <TextInput placeholder="Nome" />
                    <TextInput placeholder="Idade" keyboardType='numeric' />
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
                    <TextInput placeholder="Alinhamento" />
                    <TextInput placeholder="Raça" keyboardType='text' />
                    <TextInput placeholder="Classe" keyboardType='text' />
                </ContainerInputs>
                <ContainerInputs>
                    <TextInputLife placeholder="Vida" keyboardType='numeric'  />
                    <TextInputEnergy placeholder="Energia" keyboardType='numeric' />
                    <TextInputArmor placeholder="Defesa" keyboardType='numeric' />
                </ContainerInputs>
                <ContainerStatus>
                    <StatusBloco title="Força" value={14} />
                    <StatusBloco title="Destreza" value={20} />
                    <StatusBloco title="Constituição" value={16} />
                </ContainerStatus>
                <ContainerStatus>
                    <StatusBloco title="Inteligência" value={8} />
                    <StatusBloco title="Sabedoria" value={12} />
                    <StatusBloco title="Carisma" value={10} />
                </ContainerStatus>
                <ContainerButtons>
                    <ButtonFicha title="Itens" color="white" background="#BBA227" icon="" to="Home" navigation={navigation} />
                    <ButtonFicha title="Habilidades" color="white" background="#A8171D" icon="" to="Home" navigation={navigation} />
                    <ButtonFicha title="Informações" color="white" background="#1B1887" icon="" to="Home" navigation={navigation} />
                </ContainerButtons>

            </ScrollView>
        </Container>
    );
}