import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = () => {
    return (
        <View style={[ styles.container, styles.cyan]}>
            <Text style={styles.boxText}>Cyan: #2aa198</Text>
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
    pink: {
        backgroundColor: 'pink'
    },
    cyan: {
        backgroundColor: '#2aa198'
    },
    blue: {
        backgroundColor: '#268bd2'
    },
    magenta: {
        backgroundColor: '#d33682'
    },
    orange: {
        backgroundColor: '#cb4b16'
    },
    boxText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default ColorBox;