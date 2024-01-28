import React from "react";
import { View, Text } from "react-native";
import { style } from './style'

export default function Balance({ saldo, gastos }) {
    return (
        <View style={style.container}>
            <View style={style.item}>
                <Text style={style.itemTitle}>Saldo</Text>
                <View style={style.content}>
                    <Text style={style.currencySymbol}>R$</Text>
                    <Text style={style.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={style.item}>
                <Text style={style.itemTitle}>Gastos</Text>
                <View style={style.content}>
                    <Text style={style.currencySymbol}>R$</Text>
                    <Text style={style.expenses}>{gastos}</Text>
                </View>
            </View>
        </View>
    )
}