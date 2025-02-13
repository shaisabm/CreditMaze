import React from 'react';
import {StyleSheet, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Icon ({name, color, backgroundColor, size=40, style}) {
    return (

        <View style={[styles.container, {backgroundColor, height: size*1.8, width: size*1.8}, style]}>
            <MaterialCommunityIcons name={name} size={size} color={color}/>
        </View>
    );
}

const styles= StyleSheet.create({
        container: {
            // height: 80,
            // width: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%"

    }
})
export default Icon;