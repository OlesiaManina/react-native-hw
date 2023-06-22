import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {PostsScreen} from './PostsScreen';
import {CreatePostsScreen} from './CreatePostsScreen';
import {ProfileScreen} from './ProfileScreen';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();

    return (
        <Tabs.Navigator tabBarOptions={{showLabel: false}}>
          <Tabs.Screen name="Публікації" component={PostsScreen} 
          options={{tabBarIcon: ({focused, size, color}) => (<AntDesign name="appstore-o" size={24} color="#212121" />),
            headerTitleAlign: 'center',
            headerRight: () => (
                <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => navigation.navigate("Login")}
                  >
                <MaterialIcons name="logout" size={28} color="#BDBDBD" />
                </TouchableOpacity>
                )
          }}/>

          <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} 
          options={{tabBarIcon: ({focused, size, color}) => (<View 
          style={{ width: 70, height: 40, backgroundColor: '#FF6C00', alignItems: 'center', justifyContent: 'center',  borderRadius: 50,}}> 
          <Octicons name="plus" size={15} color="#FFF" />
          </View>)}}/>

          <Tabs.Screen name="ProfileScreen" component={ProfileScreen} 
          options={{tabBarIcon: ({focused, size, color}) => (<FontAwesome5 name="user" size={24} color="#212121" />)}}/>
        </Tabs.Navigator>
      );
};

