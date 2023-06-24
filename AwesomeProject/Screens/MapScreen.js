import React from "react";
import { 
    View, 
 } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({route}) => {

    return (
        <View style={{flex: 1,}}>
            <MapView style={{flex: 1,}} showsUserLocation={true} region={{...route.params.location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}}>
           {location && (<Marker coordinate={route.params.location} title={route.params.name}/>)}
        </MapView>
        </View>
    )
}