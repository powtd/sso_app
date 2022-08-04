import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';
import SignUp from './src/screens/SignUp';
import ChangeHospital from './src/screens/ChangeHospital';

const Stack = createNativeStackNavigator();

function Settings() {
  return (<Text>Settings</Text>);
}

function App() {
  let [fontsLoaded] = useFonts({
    'Kanit-SemiBold': require('./assets/fonts/Kanit-SemiBold.ttf'),
    'Kanit-Medium': require('./assets/fonts/Kanit-Medium.ttf'),
    'Kanit-Light': require('./assets/fonts/Kanit-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Change" component={ChangeHospital} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;