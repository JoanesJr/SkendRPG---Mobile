import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #133961;
    padding-left: 14px;
    padding-right: 14px;
`;

export const Input = styled.TextInput`
    width: 350px;
    height: 50px;
    background-color: white;
    margin-top: 10px;
    border-radius: 15px;

`;

export const InputFile = styled.TouchableOpacity`
    width: 350px;
    height: 50px;
    background-color: #BBA227;
    margin-top: 10px;
    border-radius: 15px;

`;

export const FormArea = styled.View`
    margin-top: 100px;
`;

export const ButtonsArea = styled.View`
    margin-top: 50px;
    width: 350px;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;

export const BtnLogin = styled.TouchableOpacity`
    background-color:  #BBA227;
    width: 130px;
    height: 60px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;

`;

export const BtnAdd = styled.TouchableOpacity`
    background-color:  #A4390D;
    width: 130px;
    height: 60px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;

`;