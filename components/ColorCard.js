import React from 'react';
import { Switch, View, Text, StyleSheet } from "react-native";

const ColorCard = () => {
    return (
        <View style={[ styles.container ]}>
            <Text style={[ styles.text ]}>Color Name</Text>
            <Switch style={[]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})
export default ColorCard;