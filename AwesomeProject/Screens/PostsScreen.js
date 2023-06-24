import { 
    TouchableOpacity
 } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultPostsScreen } from "./DefaultPostsScreen";
import { MapScreen } from "./MapScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MaterialIcons } from '@expo/vector-icons';

export const PostsScreen = () => {
    const NestedScreen = createStackNavigator();

    return (
    <NestedScreen.Navigator>
    <NestedScreen.Screen name="Публікації" component={DefaultPostsScreen}
    options={{headerTitleAlign: 'center',
    headerRight: () => (
        <TouchableOpacity
        style={{marginRight: 15}}
        onPress={() => navigation.navigate("Login")}>
        <MaterialIcons name="logout" size={28} color="#BDBDBD" />
        </TouchableOpacity>)}}
    />
    <NestedScreen.Screen name='Локація' component={MapScreen}/>
    <NestedScreen.Screen name='Коментарі' component={CommentsScreen}/>
    </NestedScreen.Navigator>

    )
}

