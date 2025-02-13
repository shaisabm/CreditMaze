import {Platform} from "react-native";

export default {
    text: {
        fontFamily: Platform.OS === 'ios'? 'Avenir': 'Roboto',
        fontSize: 18
    }
}