import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from "./components/ColorBox";

const App = () => {
    return (
        <SafeAreaView style={ { flex: 1, paddingHorizontal: 10 }}>
            <ColorBox colorName="Pink" colorHex='pink'/>
            <ColorBox colorName="Cyan" colorHex='#2aa198'/>
            <ColorBox colorName="Blue" colorHex='#268bd2'/>
            <ColorBox colorName="Magenta" colorHex='#d33682'/>
            <ColorBox colorName="Orange" colorHex='#cb4b16'/>
            <ColorBox colorName="Cyan" colorHex='#2aa198'/>
        </SafeAreaView>
    );
}
export default App;