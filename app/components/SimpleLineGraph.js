import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {LineChart} from "react-native-chart-kit";
import AppText from "./AppText";
import colors from "../configs/colors";

function SimpleLineGraph({data, title = "Title", subtitle = "$565", color="rgba(0, 208, 255, 1)", width, onPress}) {


    return (
        <TouchableOpacity style={[styles.container, {width: width}]} onPress={onPress}>
            <View style={styles.textContainer}>
                <AppText styles={styles.title}>{title}</AppText>
                <AppText styles={styles.subtitle}>{subtitle}</AppText>
            </View>

            <LineChart
                data={data}
                withVerticalLabels={false}
                withHorizontalLabels={false}
                withOuterLines={false}
                withInnerLines={false}
                withShadow={false}
                withDots={false}

                width={width}
                height={140}
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: colors.gray,
                    backgroundGradientFrom: colors.gray,
                    backgroundGradientTo: colors.gray,
                    decimalPlaces: 1,
                    color: () => color,
                    style: {
                        borderRadius: 16,
                    },

                }}
                bezier
                style={{
                    marginVertical: 0,
                    marginHorizontal: 0,
                    paddingTop: 10,
                    paddingRight: 0,
                    paddingLeft: 0,
                }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        height: 180,
        // width: 180,
        overflow: "hidden",
        backgroundColor: colors.gray
    },
    textContainer: {
        paddingLeft: 10,
        paddingTop: 10,

    },
    title: {
        color: colors.lightGray,
        fontWeight: "bold",
        fontSize: 13,
    },
    subtitle: {
        color: colors.white,
        fontWeight: "bold"
    }
})
export default SimpleLineGraph;