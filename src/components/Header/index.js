import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { style } from './style'
import { Feather } from "@expo/vector-icons"



export default function Header({ name }) {

    const [showDropMenu, setShowDropMenu] = useState(false)
    const handleDropMenu = () => setShowDropMenu((show) => !show)

    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.userName}>{name}</Text>
                <TouchableOpacity activeOpacity={0.9} style={style.buttonUser} onPress={handleDropMenu}>
                    <Feather name="user" size={27} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}