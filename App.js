import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from './src/screens/Home';
import CreateF from './src/screens/CreateF';
import CreateR from './src/screens/CreateR';
import CreateRRPG from './src/screens/CreateRRPG';
import Login from './src/screens/Login';
import Habilities from './src/screens/Habilities';
import EditF from './src/screens/EditF';
import CreateHability from './src/screens/Habilities/CreateHability';
import Items from './src/screens/Items';
import CreateItem from './src/screens/Items/CreateItem';
import Register from './src/screens/Register';

function TabsEditFicha({navigation, route}) {
  const {params} = route;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeFicha') {
            iconName = focused
              ? 'person-sharp'
              : 'person-outline';
          } else if (route.name === 'Habilities') {
            iconName = focused ? 'git-branch' : 'git-branch-outline';
          } else {
            iconName = focused ? 'shield-sharp' : 'shield-outline';

          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeFicha" component={EditF} initialParams={params} options={{
        title: 'Home',
        headerTransparent: true,
        headerShown: false,
      }} />
      <Tab.Screen name="Habilities" component={Habilities} initialParams={params} options={{
          title: 'Habilidades',
          headerTransparent: true,
          headerShown: false
        }} />
      <Tab.Screen name="Items" component={Items} initialParams={params} options={{
          title: 'Itens',
          headerTransparent: true,
          headerShown: false
        }} />
    </Tab.Navigator>
  );
}


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
        <Stack.Screen name="Register" component={Register} options={{
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
        <Stack.Screen name="Habilities" component={Habilities} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="CreateHability" component={CreateHability} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="EditHability" component={CreateHability} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="CreateItem" component={CreateItem} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="EditItem" component={CreateItem} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name="EditFicha" component={TabsEditFicha} options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}
