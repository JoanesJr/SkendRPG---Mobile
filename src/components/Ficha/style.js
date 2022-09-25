import styled from "styled-components";

export const Container = styled.View`
    background-color: #133951;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-left: 14px;
    padding-right: 14px;
`;

export const ContainerStatus = styled.View`
    /* background-color: blue; */
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding-left: 14px;
    padding-right: 14px;
    margin-top: 25px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;


export const ContainerInputs = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-around
`;

export const TextInput = styled.TextInput`
    height: 30px;
    width: 100px;
    background-color: white;
    border-radius: 10px;
    margin-left: 5px;
    padding-left: 10px;
`;

export const TextInputLife = styled.TextInput`
    height: 30px;
    width: 100px;
    background-color: white;
    border-radius: 10px;
    margin-left: 5px;
    padding-left: 10px;
    border: 1px solid red;
`;

export const TextInputEnergy = styled.TextInput`
    height: 30px;
    width: 100px;
    background-color: white;
    border-radius: 10px;
    margin-left: 5px;
    padding-left: 10px;
    border: 1px solid blue;
`;

export const TextInputArmor = styled.TextInput`
    height: 30px;
    width: 100px;
    background-color: white;
    border-radius: 10px;
    margin-left: 5px;
    padding-left: 10px;
    border: 1px solid yellow;
`;

export const InputFile = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    background-color: #5C5155;
    justify-content: center;
    align-items: center;
`;

export const ContainerButtons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
`;

