import {StyleSheet, View} from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <HomeScreen/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",

    }
});
