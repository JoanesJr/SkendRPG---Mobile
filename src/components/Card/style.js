import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    height: 60px;
    background-color: #091A2C;
    border: 2px solid black;
    margin-bottom: 5px;
    padding: 3px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 14px;
    padding-right: 14px;
`;

export const Img = styled.Image`
    width: 50px;
    height:60px; 
    padding: 5px; 
    border-radius: 25px;
`

export const TextArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
`;

export const Text = styled.Text`
    font-size: 14px;
    color: white;
    font-weight: bold;
`;