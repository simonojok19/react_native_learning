import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ColorPreview from "../components/ColorPreview";

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
                data={colorPalettes}
                keyExtractor={(item) => item.paletteName }
                renderItem={({ item }) => (
                    <ColorPreview
                        key={item.paletteName}
                        navigation={navigation}
                        colors={item.colors}
                        name={item.paletteName} />
                )} />

        </View>
    );
}
export default Home;