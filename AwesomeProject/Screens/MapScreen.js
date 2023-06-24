import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({route}) => {

    const location = route.params.location.coords;

    return (
        <View style={{flex: 1,}}>
            <MapView style={{flex: 1,}} showsUserLocation={true}         
            region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
           {location && (<Marker 
        coordinate={{ latitude: location.latitude, longitude: location.longitude}}
        title={route.params.name}/>)}
        </MapView>
        </View>
    )
}