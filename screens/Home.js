import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import ColorPreview from "../components/ColorPreview";

const Home = ({ navigation, route }) => {
    const [colorPalettes, setColorPalettes ] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

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

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000)
    }, [])

    useEffect(() => {
        if (route) {
            if (route.params) {
                const p = route.params.colorPalette;
                console.log(p);
                setColorPalettes((p) => [
                    p,
                    ...colorPalettes,
                ])
            }
        }
    }, [route.params.colorPalette])
    return (
        <View>
            <FlatList
                ListHeaderComponent={
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('ColorModal')}}>
                        <Text>Launch Modal</Text>
                    </TouchableOpacity>
                }
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                data={colorPalettes}
                keyExtractor={(item) => item.paletteName }
                renderItem={({ item }) => {
                    console.log(colorPalettes);
                    return (<ColorPreview
                        key={item.paletteName}
                        navigation={navigation}
                        colors={item.colors}
                        name={item.paletteName}/>)
                }} />

        </View>
    );
}
export default Home;