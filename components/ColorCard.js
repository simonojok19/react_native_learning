import React, {useState} from 'react';
import { Switch, View, Text, StyleSheet } from "react-native";

const ColorCard = ({ color, addColor, removeColor }) => {
    const [colors, setColors] = useState({})
    const [isEnabled, setIsEnabled] =useState(false);

    const changeValue = (value) => {
        setIsEnabled(value)
        if (value) {
            addColor(color);
        } else {
            removeColor(color);
        }
    }
    return (
        <View style={[ styles.container ]}>
            <Text style={[ styles.text ]}>{ color.colorName }</Text>
            <Switch style={[]} value={isEnabled} onValueChange={changeValue}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 5
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})
export default ColorCard;