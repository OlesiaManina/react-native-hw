import React, {useState} from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform} from "react-native";
import bgImage from '../assets/PhotoBg.png';
import avatar from '../assets/avatar.png';
import { AntDesign } from '@expo/vector-icons';

const initialData = {
  login: '',
  email: '',
  password: ''
}

export const RegistrationScreen = () => {

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
          behavior='position' keyboardVerticalOffset={-500}
            // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
      <View style={{...styles.form, 
          // paddingBottom: isKeyboardShown? 116 : 45,
        }}>
      <Image
        style={styles.imageAvatar}
        // source={avatar}
      />
      <View style={styles.svg}>
      <AntDesign name="pluscircleo" size={25} color="#FF6C00" backgroundColor="#FFFFFF"/>
      </View>
        <Text style={styles.header}>Реєстрація</Text>
        <TextInput style={styles.textInput} placeholder="Логін" onFocus={() => setisKeyboardShown(true)}
        value={formData.login}
        onChangeText={(value) => setFormData((prevState) => ({...prevState, login: value}))}
        />
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
         onPress={onSubmit}
         >
      <Text style={styles.appButtonText}>
      Зареєстуватися
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
        activeOpacity={0.7}
        style={styles.link}>
      <Text style={styles.linkText}>
      Вже є акаунт? Увійти
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
      marginTop: 92,
      marginBottom: 32,
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
      paddingBottom: 45,
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
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    imageAvatar: {
      width: 120,
      height: 120,
      position: 'absolute',
      alignSelf: 'center',
      top: -60,
      backgroundColor: '#F6F6F6',
      borderRadius: 16,
    },
    svg: {
      position: 'absolute',
      width: 25,
      height: 25,
      left: 235,
      top: 21,
    },
    inputLink: {
      position: 'absolute',
      right: 32,
      top: 308,
    },
    inputLinkText: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 19,
      color: '#1B4371',
    }
  });