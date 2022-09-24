import styled from "styled-components";
import {  StatusBar } from 'react-native';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 20;

export const Container = styled.SafeAreaView`
    height: 150px;
    background-color: #133961;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: ${StatusBarHeight};
    flex-direction: row;
    justify-content: space-between;
`;

export const UserContainer = styled.View`
    height: 44px;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
`;

export const LogoContainer = styled.TouchableOpacity`
    background-color: gray;
    width: 44px;
    height: 44px;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
`;

export const UserName = styled.Text`
    font-size: 22px;
    color: #dadada;
`;