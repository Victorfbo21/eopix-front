import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { style } from './style'
import { Feather } from "@expo/vector-icons"

export default function Header({ name }) {
    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.userName}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={style.buttonUser}>
                    <Feather name="user" size={27} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}