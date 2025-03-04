import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppText from "./AppText";

function Icon({name, color, title, backgroundColor, size = 40, style, onPress}) {
    return (

        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, {backgroundColor, height: size * 1.8, width: size * 1.8}, style]}>
                <MaterialCommunityIcons name={name} size={size} color={color}/>
                {title && <AppText styles={{fontSize: size*0.50}}>{title}</AppText>}
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        // height: 80,
        // width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%"

    }
})
export default Icon;