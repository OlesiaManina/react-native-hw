import React from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions } from "react-native";
import bgImage from '../assets/PhotoBg.png';

export const LoginScreen = () => {
   return (
<View style={styles.container}>
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.form}>
        <Text style={styles.header}>Увійти</Text>
        <TextInput style={styles.textInput} placeholder="Адреса електронної пошти"/>
        <TextInput style={styles.textInput} placeholder="Пароль" secureTextEntry={true}/>
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.inputLink}>
      <Text style={styles.inputLinkText}>
      Показати
    </Text>
    </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}>
      <Text style={styles.appButtonText}>
      Увійти
    </Text>
    </TouchableOpacity>
      <Text style={styles.linkText}>Немає акаунту? </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.linktUnderlined}>
      <Text style={styles.linkTextUnderlined}>
      Зареєструватися
    </Text>
    </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1
    },
    header: {
      color: 'black',
      marginTop: 32,
      marginBottom: 33,
      fontSize: 30,
      lineHeight: 35,
      fontWeight: '500',
      textAlign: 'center',
    },
    form: {
      position: 'absolute',
      backgroundColor: '#fff',
      flex: 1,
      paddingHorizontal: 16,
      width: '100%',
      height: 812,
      left: 0,
      top: 263,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    textInput: {
      height: 50,
      paddingLeft: 16,
      marginBottom: 16,
      borderStyle: 'solid',
      borderColor: '#E8E8E8',
      borderWidth: 1,
      borderRadius: 8,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 19,
      shadowColor: '#BDBDBD',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 4
      }
    }, 
    button: {
      height: 51,
      marginTop: 27,
      marginBottom: 16,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      paddingHorizontal: 32,
      paddingVertical: 16,
      backgroundColor: '#FF6C00',
    },
    appButtonText: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 19,
      color: '#fff',
    },
    linkText: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 19,
      color: '#1B4371',
      marginLeft: 62,
      marginRight: 'auto',
    },
    linktUnderlined: {
        position: 'absolute',
        left: 198,
        top: 326,
        borderBottomWidth: 1,
        borderBottomColor: '#1B4371',
    },
    linkTextUnderlined: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: '#1B4371',
    },
    inputLink: {
      position: 'absolute',
      left: 271,
      top: 182,
    },
    inputLinkText: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 19,
      color: '#1B4371',
    }
  });