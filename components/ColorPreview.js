import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";


const ColorPreview = ({ navigation, colors, name}) => {
    return (
        <TouchableOpacity onPress={ () => {
            navigation.navigate(
                'ColorPalette', options = {
                    colors: colors,
                    colorName: name
                }
            )
        } }>
            <Text>Solarized Color</Text>
            <FlatList
                horizontal={true}
                data={colors}
                keyExtractor={(item) => item.colorName}
                renderItem={
                    ({ item }) => {
                        const boxColor = {
                            backgroundColor: item.hexCode
                        }
                        return (<View
                            key={item.colorName}
                            style={[styles.colorBox, boxColor]}>
                        </View>)
                    }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    colorBox: {
        width: 50,
        height: 50,
        marginVertical: 5,
        marginHorizontal: 5,
    }
})


export default ColorPreview;