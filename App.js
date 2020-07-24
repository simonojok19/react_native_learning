import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Hello, world!</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'teal',
        paddingVertical: 10,
        paddingHorizontal: 30
    }
});

export default App;