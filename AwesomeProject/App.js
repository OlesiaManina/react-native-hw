
import React  from "react";
import {Provider, useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './redux/store'
import { store } from "./redux/store";
import { Home } from "./Screens/Home"
import { LoginScreen } from "./Screens/LoginScreen"
import { RegistrationScreen } from "./Screens/RegistrationScreen"


const MainStack = createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <MainStack.Navigator >
      <MainStack.Screen name="Login" component={LoginScreen} 
        options={{headerShown: false}}/>
      <MainStack.Screen name="Registration" component={RegistrationScreen} 
        options={{headerShown: false}}/>
      <MainStack.Screen name="Home" component={Home} 
        options={{headerShown: false}}/>
      </MainStack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}


