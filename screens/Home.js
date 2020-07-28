import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ColorPreview from "../components/ColorPreview";

const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];

const COLORS = [
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
];

const COLOR_ARRAY = [
    { colors: COLORS, name: "Solarized Color" },
    { colors: FRONTEND_MASTERS, name: "Frontend Master" },
    { colors: RAINBOW, name: "Rainbow Colors" }
]

const Home = ({ navigation }) => {
    const [colorPalettes, setColorPalettes ] = useState([])
    const fetchColorPalettes = useCallback(async () => {
        const results = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
        if (results.ok) {
            const palettes = await  results.json();
            setColorPalettes(palettes);
        }
    }, [])

    useEffect(() => {
        fetchColorPalettes();
    }, [])
    return (
        <View>
            <FlatList
                data={COLOR_ARRAY}
                keyExtractor={(item) => item.name }
                renderItem={({ item }) => (
                    <ColorPreview
                        key={item.name}
                        navigation={navigation}
                        colors={item.colors}
                        name={item.name} />
                )} />

        </View>
    );
}
export default Home;