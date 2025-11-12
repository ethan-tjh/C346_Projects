import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const Boat = ({name, desc, icon_name, cover})=> {
    return (
        <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 20, color: "#808080"}}>
                <FontAwesome6 name={icon_name} size={20} /> {name.toUpperCase()}
            </Text>
            <Text style={{color: "#808080"}}>{desc}</Text>
            <Image source={cover}
                   style={{width: 412, height: 412}}/>
        </View>
    );};
export default Boat;