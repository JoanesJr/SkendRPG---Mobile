import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import Home from './src/screens/Home';
import CreateF from './src/screens/CreateF';
import CreateR from './src/screens/CreateR';
import CreateRRPG from './src/screens/CreateRRPG';
import Login from './src/screens/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={Home} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="CreateF" component={CreateF} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="CreateR" component={CreateR} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="CreateRRPG" component={CreateRRPG} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}
