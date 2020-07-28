import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from "./components/ColorBox";
import {  NavigationContainer } from "@react-navigation/native";

const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={ { flex: 1, paddingHorizontal: 10 }}>
                <FlatList
                    data={COLORS}
                    keyExtractor={(item) => item.colorName}
                    renderItem={
                        ({ item }) => <ColorBox
                            key={item.colorName}
                            colorName={item.colorName}
                            colorHex={item.hexCode}/>
                    }
                    ListHeaderComponent={<Text>Solarized Color</Text>}
                />
            </SafeAreaView>
        </NavigationContainer>
    );
}
export default App;