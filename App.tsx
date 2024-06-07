import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FuelScreen, HomeScreen, LoginScreen, PumpScreen } from './src/screens';


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Fuel'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Available Services',
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white', fontWeight: '100', fontSize: 24 },
            headerStyle: {
              backgroundColor: '#000000'
            }
          }} />

        <Stack.Screen name="Fuel" component={FuelScreen}
          options={{
            title: 'Fuel Categories',
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white', fontWeight: '100', fontSize: 24 },
            headerStyle: {
              backgroundColor: '#000000'
            }
          }} />

        <Stack.Screen name="Pump" component={PumpScreen}
          options={{
            title: 'Fuel Details',
            headerTitleAlign: 'center',
            headerTitleStyle: { color: 'white', fontWeight: '100', fontSize: 24 },
            headerStyle: {
              backgroundColor: '#000000'
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
