import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={ { flex: 1, paddingHorizontal: 10 }}>
            <View style={[styles.container, styles.pink]}>
                <Text>Hello, world!</Text>
            </View>
            <View style={[ styles.container, styles.cyan]}>
                <Text>Cyan: #2aa198</Text>
            </View>
            <View style={[ styles.container, styles.blue ]}>
                <Text>Blue: #268bd2</Text>
            </View>
            <View style={[ styles.container, styles.magenta ]}>
                <Text>Magenta: #d33682</Text>
            </View>
            <View style={[ styles.container, styles.orange ]}>
                <Text>Orange: #cb4b16</Text>
            </View>
        </SafeAreaView>
    );
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

export default App;