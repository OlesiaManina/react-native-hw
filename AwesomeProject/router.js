import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Screens/Home"
import { LoginScreen } from "./Screens/LoginScreen"
import { RegistrationScreen } from "./Screens/RegistrationScreen"


const MainStack = createStackNavigator();


export const useRoute = (isAuth) => {
    if (!isAuth) {
      return (<><MainStack.Screen name="Login" component={LoginScreen} 
      options={{headerShown: false}}/>
        <MainStack.Screen name="Registration" component={RegistrationScreen} 
        options={{headerShown: false}}/></>)
    } return (<MainStack.Screen name="Home" component={Home} 
    options={{headerShown: false}}/>)
  }