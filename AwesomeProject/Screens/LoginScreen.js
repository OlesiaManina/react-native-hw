import React, { useState} from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  TextInput, 
  TouchableOpacity, 
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform} from "react-native";
import bgImage from '../assets/PhotoBg.png';

const initialData = {
  email: '',
  password: ''
}

export const LoginScreen = () => {
  const [isKeyboardShown, setisKeyboardShown] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const keyBoardHide = () => {
    Keyboard.dismiss(); 
    setisKeyboardShown(false);
  }

    const onSubmit = () => {
    keyBoardHide();
    console.log(formData);
    setFormData(initialData);
  }
   return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
<View style={styles.container}>
    <ImageBackground source={bgImage} resizeMode="cover" 
    style={styles.image}>
      <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -18 : -18}
            style={styles.keyBoard}>
      <View style={styles.form}>
        <Text style={styles.header}>Увійти</Text>
        <TextInput style={styles.textInput} placeholder="Адреса електронної пошти" onFocus={() => setisKeyboardShown(true)}
        value={formData.email}
        onChangeText={(value) => setFormData((prevState) => ({...prevState, email: value}))}
        />
        <TextInput style={styles.textInput} placeholder="Пароль" secureTextEntry={true} onFocus={() => setisKeyboardShown(true)}
        value={formData.password}
        onChangeText={(value) => setFormData((prevState) => ({...prevState, password: value}))}
        />
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.inputLink}>
      <Text style={styles.inputLinkText}>
      Показати
    </Text>
    </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={onSubmit}>
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
      </KeyboardAvoidingView>
    </ImageBackground>
  </View>
  </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
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
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingBottom: 144,
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
      right: 32,
      top: 182,
    },
    inputLinkText: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 19,
      color: '#1B4371',
    }
  });