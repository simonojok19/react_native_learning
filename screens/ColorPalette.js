import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
    return (
        <SafeAreaView style={ { flex: 1, paddingHorizontal: 10 }}>
            <FlatList
                data={route.params.colors}
                keyExtractor={(item) => item.colorName}
                renderItem={
                    ({ item }) => <ColorBox
                        key={item.colorName}
                        colorName={item.colorName}
                        colorHex={item.hexCode}/>
                }
                ListHeaderComponent={<Text style={styles.text}>{ route.params.colorName }</Text>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 5,
        fontSize: 20
    }
})

export default ColorPalette;