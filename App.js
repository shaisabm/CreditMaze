import {StyleSheet, View} from 'react-native';
import HomeScreen from "./app/screens/HomeScreen";
import 'react-native-reanimated';
import Slider from "@react-native-community/slider";
import ColorPicker from 'react-native-wheel-color-picker';
import {useState} from "react";

export default function App() {
  const [color, setColor] = useState('#FF0000'); // Start with a default color

  const onColorChange = color => {
    setColor(color);
  };

  return (
       <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 24,
  },
});