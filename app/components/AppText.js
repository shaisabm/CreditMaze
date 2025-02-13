import React from 'react';
import {Text} from "react-native";
import style from "../configs/defaultStyle";

function AppText ({children, styles}) {
    return (
        <Text style={[style.text, styles]} >{children}</Text>
    );
}

export default AppText;