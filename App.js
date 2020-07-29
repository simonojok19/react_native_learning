import 'react-native-gesture-handler';
import React from 'react';
import {  NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen
                name="ColorPalette"
                component={ColorPalette}
                options={({ route }) => ({ title: route.params.colorName })}/>
        </RootStack.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
export default App;