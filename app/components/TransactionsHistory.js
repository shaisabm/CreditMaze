import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import BalanceCard from "./BalanceCard";
import colors from "../configs/colors";
import AppText from "./AppText";


function TransactionsHistory(props) {

    const data = [
        {
            value: 1,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "-$60.00",
            color: "white"
        },
        {
            value: 2,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "$50.00",
            color: "green"
        },
        {
            value: 3,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "-$20.00",
            color: "white"
        },
        {
            value: 4,
            titleOne: "Withdrawal: To Checking - 9633",
            subtitleOne: "Saving - 5984",
            titleTwo: "$90.00",
            color: "green"
        },
    ]

    return (
        <View style={styles.container}>
            <AppText styles={styles.activityText}>Activity</AppText>

            <FlatList data={data}
                      keyExtractor={(item) => item.value.toString()}
                      renderItem={({item}) => {
                          return (
                              <>
                                  <BalanceCard titleOne={item.titleOne} style={styles.card}
                                               titleOneStyle={styles.titleOne}
                                               subtitleOne={item.subtitleOne}
                                               titleTwo={item.titleTwo}
                                               titleTwoStyle={[styles.titleTwo, {color: item.color}]}
                                  />
                                  <View style={styles.lineBreak}></View>
                              </>
                          )
                      }}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        overflow: "hidden",
        paddingTop: 15
    },
    card: {
        backgroundColor: colors.gray,
        borderRadius: 0,
        // borderBottomWidth: 1,

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
        backgroundColor: colors.lightGray

    }


})
export default TransactionsHistory;