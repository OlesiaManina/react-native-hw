import React, {useState} from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    TextInput,
    Image,
    Keyboard,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
 } from "react-native";
 import { Camera } from "expo-camera";
 import * as Location from "expo-location";
 import { useNavigation } from '@react-navigation/native';
 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import { Ionicons } from '@expo/vector-icons';
 import { FontAwesome5 } from '@expo/vector-icons';

 const initialData = {
    name: '',
    location: ''
  }

 export const CreatePostsScreen = () => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');
    const [formData, setFormData] = useState(initialData);
    const [isKeyboardShown, setisKeyboardShown] = useState(false);
    const [location, setLocation] = useState(null);

    const navigation = useNavigation();

    const keyBoardHide = () => {
      Keyboard.dismiss(); 
      setisKeyboardShown(false);
    }

    const onSubmit = () => {
      keyBoardHide();
      navigation.navigate('Публікації', {photo, formData, location});
      setPhoto('');
      setFormData(initialData);
    }

    const clearScreen = () => {
      setPhoto('');
      setFormData(initialData);
    }

    const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude};
    setLocation(coords);
    }

    console.log('location', location)
    return (
        <TouchableWithoutFeedback onPress={keyBoardHide}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='position'
          keyboardVerticalOffset={Platform.OS === 'ios' ? -103 : -103}>
            <View style={{alignItems: "center", justifyContent: "center",}}>
            <Camera style={styles.camera} ref={setCamera}>
                {photo && <Image style={styles.photo} source={{uri: photo}}/>}
            <TouchableOpacity
        activeOpacity={0.7}
        style={{...styles.snapContainer, backgroundColor: photo? "#FFFfff4C" : "#FFF" }}
        onPress={takePhoto}
        >
        <MaterialCommunityIcons name="camera-enhance-outline" size={24} color={photo? "#FFF" : "#BDBDBD"} />
    </TouchableOpacity>
    </Camera>
    </View>
    <Text style={styles.text}>Завантажте фото</Text>
    <TextInput placeholder="Назва..." 
    style={{...styles.textInput, paddingLeft: 16}}
    onFocus={() => setisKeyboardShown(true)}
        value={formData.name}
        onChangeText={(value) => setFormData((prevState) => ({...prevState, name: value}))}
        />
    <TextInput placeholder="Місцевість..."
    style={{...styles.textInput, paddingLeft: 28}}
    onFocus={() => setisKeyboardShown(true)}
    value={formData.location}
    onChangeText={(value) => setFormData((prevState) => ({...prevState, location: value}))}
    />
    <Ionicons name="ios-location-outline" size={22} style={styles.locationIcon} />
    <TouchableOpacity
        activeOpacity={0.7}
        style={{...styles.button, backgroundColor: photo? "#FF6C00" : "#F6F6F6"}}
        onPress={onSubmit}
        >
      <Text style={{...styles.appButtonText, color: photo? '#FFF' : '#BDBDBD',}}>
      Опубліковати
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
        activeOpacity={0.7}
        style={styles.binBtn}
        onPress={clearScreen}
        >
        <FontAwesome5 name="trash-alt" size={23} color="#BDBDBD" />
    </TouchableOpacity>
</KeyboardAvoidingView>
</View>
    </TouchableWithoutFeedback> 
    )
 }

 const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        paddingHorizontal: 18,
        backgroundColor: '#fff',
    },
    camera: {
        position: 'relative',
        width: 343,
        height: 240,
        marginTop: 32,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        backgroundColor: '#E8E8E8',
    },
    photo: {
        position: 'absolute',
        top: -3,
        left: -3,
        width: 347,
        height: 244,
        borderRadius: 8,
    },
    snapContainer: {
        position: 'absolute',
        left: 142,
        top: 90,
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: '#BDBDBD',
        fontSize: 16,
        marginTop: 8,
        marginBottom: 32,
    },
    textInput: {
        height: 50,
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
      }, 
      button: {
        height: 51,
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 16,
      },
      appButtonText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
      },
      locationIcon: {
        position: 'absolute',
        top: 409,
        left: 8,
        color: '#BDBDBD'
      },
      binBtn: {
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        width: 70, 
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
        marginLeft: 140,
      }
});