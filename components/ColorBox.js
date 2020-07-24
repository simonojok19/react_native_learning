import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex
    }
    return (
        <View style={[ styles.container, boxColor]}>
            <Text style={styles.boxText}>{colorName}: {colorHex}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: 20,
        marginVertical: 5
    },
    boxText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default ColorBox;