import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text,} from "react-native";
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
                ListHeaderComponent={<Text>{ route.params.colorName }</Text>}
            />
        </SafeAreaView>
    )
}

export default ColorPalette;