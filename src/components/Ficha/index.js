import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../api/api'
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
import { NativeScreenNavigationContainer } from 'react-native-screens';

export default function Ficha({ navigation, buttonText, edit, params }) {

    const [image, setImage] = useState("");
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [tendency, setTendency] = useState(1);
    const [breed, setBreed] = useState("");
    const [classy, setClassy] = useState("");
    const [life, setLife] = useState("");
    const [energy, setEnergy] = useState("");
    const [armor, setArmor] = useState("10");
    const [level, setLevel] = useState("1");
    const [xp, setXP] = useState("0");
    const [proficiency, setProficiency] = useState("");
    const [str, setStr] = useState(null);
    const [dex, setDex] = useState(null);
    const [con, setCon] = useState(null);
    const [int, setInt] = useState(null);
    const [sab, setSab] = useState(null);
    const [car, setCar] = useState(null);

    const makeToken = async () => {
        const data = {
            name,
            age,
            tendency,
            breed,
            class: classy,
            life,
            energy,
            armor,
            level,
            xp,
            proficiency,
            str,
            dex,
            const: con,
            int,
            sab,
            car,
            user_id : 1,
            rpg_id: 1
        }

        await api.post("/token", data).then(({data}) => {
            navigation.navigate("Home");
        }).catch(({response}) => {
            console.log('deu ruim');
            console.log(response.data);
        })
    }

    const updateToken = async () => {
        const data = {
            name,
            age,
            tendency,
            breed,
            class: classy,
            life,
            energy,
            armor,
            level,
            xp,
            proficiency,
            str,
            dex,
            const: con,
            int,
            sab,
            car,
            user_id: 1,
            rpg_id: 1
        }

        await api.put(`/token/${id}`, data).then(({ data }) => {
            navigation.navigate("Home");
        }).catch(({ response }) => {
            console.log('deu ruim');
            console.log(response.data);
        })
    }

    if (edit) {
        useEffect( () => {
            const getToken = async () => {
                let {data} = await api.get(`token/${params.id}`);
                setAge(String(data.age));
                setArmor(String(data.armor));
                setBreed(String(data.breed));
                setClassy(String(data.class));
                setCon(String(data.const));
                setCar(String(data.car));
                setSab(String(data.sab));
                setStr(String(data.str));
                setInt(String(data.int));
                setDex(String(data.dex));
                setProficiency(String(data.proficiency));
                setLevel(String(data.level));
                setLife(String(data.life));
                setEnergy(String(data.energy));
                setName(String(data.name)),
                setXP(String(data.xp));
                setTendency(String(data.tendency));
                setId(data.id);
            }

            getToken();
        }, []);
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage("https://static.wikia.nocookie.net/kimetsu-no-yaiba-fan/images/3/35/Kokushibo_Anime_profile_%28human%29.png/revision/latest?cb=20210126170356");
        }
    };


    // const teste = () => {
    //     console.log('aqui');
    //     console.log(route)
    // }

    return (
        <Container flex={1}>
            
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <ContainerInputs>
                    <TextInput placeholder="Nome" onChangeText={(e) => setName(e)} value={name} />
                    <TextInput placeholder="Idade" onChangeText={(e) => setAge(e)} keyboardType='numeric' value={age} />
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
                    <TextInput placeholder="Alinhamento" onChangeText={(e) => setTendency(e)} value="1" />
                    <TextInput placeholder="Raça" keyboardType='text' onChangeText={(e) => setBreed(e)} value={breed} />
                    <TextInput placeholder="Classe" keyboardType='text' onChangeText={(e) => setClassy(e)} value={classy} />
                </ContainerInputs>
                <ContainerInputs>
                    <TextInputLife placeholder="Vida" keyboardType='numeric' onChangeText={(e) => setLife(e)} value={life} />
                    <TextInputEnergy placeholder="Energia" keyboardType='numeric' onChangeText={(e) => setEnergy(e)} value={energy} />
                    <TextInputArmor placeholder="Defesa" keyboardType='numeric' onChangeText={(e) => setArmor(e)} value={armor} />
                </ContainerInputs>
                <ContainerStatus>
                    <StatusBloco title="Força" setAttr={setStr} edit={edit} value={str} />
                    <StatusBloco title="Destreza" setAttr={setDex} edit={edit} value={dex} />
                    <StatusBloco title="Constituição" setAttr={setCon} edit={edit} value={con} />
                </ContainerStatus>
                <ContainerStatus>
                    <StatusBloco title="Inteligência" setAttr={setInt} edit={edit} value={int} />
                    <StatusBloco title="Sabedoria" setAttr={setSab} edit={edit} value={sab} />
                    <StatusBloco title="Carisma" setAttr={setCar} edit={edit} value={car} />
                </ContainerStatus>
                {/* <ContainerButtons>
                    <ButtonFicha title="Itens" color="white" background="#BBA227" icon="" to="Home" navigation={navigation} />
                    <ButtonFicha title="Habilidades" color="white" background="#A8171D" icon="" to="Habilities" navigation={navigation} />
                    <ButtonFicha title="Informações" color="white" background="#1B1887" icon="" to="Home" navigation={navigation} />
                </ContainerButtons> */}
                <ContainerButtons>
                    <TextInput placeholder="Level" keyboardType='numeric' onChangeText={(e) => setLevel(e)} value={level} />
                    <TextInput placeholder="XP" keyboardType='numeric' onChangeText={(e) => setXP(e)} value={xp} />
                    <TextInput placeholder="Proficiência" keyboardType='numeric' onChangeText={(e) => setProficiency(e)} value={proficiency} />
                </ContainerButtons>

                <ContainerButtons style={edit ? styles.edit : ''}>
                    <ButtonFicha title={buttonText} edit={edit} color="white" background="#BBA227" icon="" to="Home" navigation={navigation} data="" press={edit ? updateToken : makeToken} />
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