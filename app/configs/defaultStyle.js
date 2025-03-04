import {Platform} from "react-native";
import colors from "./colors";

export default {
    text: {
        fontFamily: Platform.OS === 'ios'? 'Avenir': 'Roboto',
        fontSize: 15,
        color: colors.white
    }
}