import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import TransactionCard from "./TransactionCard";
import colors from "../configs/colors";
import AppText from "./AppText";
import AppButton from "./AppButton";


function TransactionsHistory({ data, preview, onPress}) {

    return (
        <View style={styles.container}>
            <AppText styles={styles.activityText}>Activity</AppText>

            {!preview && (<FlatList data={data}
                                    keyExtractor={(item) => item.value.toString()}
                                    renderItem={({item}) => {
                                        return (
                                            <>
                                                <TransactionCard titleOne={item.titleOne} style={styles.card}
                                                                 titleOneStyle={styles.titleOne}
                                                                 subtitleOne={item.subtitleOne}
                                                                 titleTwo={item.titleTwo}
                                                                 titleTwoStyle={[styles.titleTwo, {color: item.color}]}
                                                                 onPress={() => console.log("Clicked transaction " + item.value)}
                                                />
                                                <View style={styles.lineBreak}></View>
                                            </>
                                        );
                                    }}
            />)}


            {preview && <View>
                {data.map((item) => (
                        <React.Fragment key={item.value} >
                            <TransactionCard titleOne={item.titleOne} style={styles.card}
                                             titleOneStyle={styles.titleOne}
                                             subtitleOne={item.subtitleOne}
                                             titleTwo={item.titleTwo}
                                             titleTwoStyle={[styles.titleTwo, {color: item.color}]}
                                             onPress={() => console.log("Clicked transaction " + item.value)}
                            />
                            <View style={styles.lineBreak}></View>

                        </React.Fragment>

                    )
                )}
                <AppButton title={"View All"} styleText={styles.viewAllText} onPress={onPress}/>
            </View>}

        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        borderRadius: 20,
        overflow: "hidden",
        paddingTop: 15,
        flex: 1
    },
    card: {
        backgroundColor: colors.gray,
        borderRadius: 0,

        borderBottomColor: colors.lightGray

    },
    titleOne: {
        fontWeight: "normal",
        color: colors.white,
        fontSize: 15
    },
    titleTwo: {
        fontWeight: 'bold',
        fontSize: 15
    },
    activityText: {
        paddingLeft: 15,
        color: colors.white,
        fontWeight: "bold",
        paddingBottom: 20
    },
    lineBreak: {
        width: "90%",
        height: 1,
        alignSelf: "center",
        backgroundColor: colors.lightGray,

    },
    viewAllText: {
        color: colors.primary,
        alignSelf: "center",
        paddingVertical: 10,
        paddingTop: 15,
        fontWeight: "500",
        fontSize: 13

    }


})
export default TransactionsHistory;