import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Header from '../../components/Header';
import { Container, Input, FormArea, ButtonsArea, BtnLogin, InputFile, BtnAdd } from '../Login/style';

export default function CreateRRPG({ navigation }) {

  const [group, setGroup] = useState("");
  const [image, setImage] = useState("");

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
      setImage(result.uri);
    }
  };

 return (
  <>
  <Header title="SkendRPG" stack={true} navigation={navigation} />
   <Container>
    
     <View>
       <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2532/2532638.png' }} style={{ width: 150, height: 150 }} />
     </View>

     <FormArea>
       <Input placeholder=" Nome" autoCorrect={false} value={group} onChangeText={(e) => setGroup(e)} />
         <InputFile onPress={pickImage}>
          <Text style={styles.textFile} > Imagem </Text>
         </InputFile>
     </FormArea>

     <ButtonsArea>
         <BtnAdd activeOpacity={0.8} onPress={() => navigation.navigate('CreateR')} >
         <Text style={styles.btnText}>Adicionar</Text>
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