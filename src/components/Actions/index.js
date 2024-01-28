import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons"


export default function Actions() {
    return (
        <ScrollView
            style={style.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity style={style.actionButton}>
                <View style={style.areaButton}>
                    <AntDesign name="addfolder" size={26} color="#000" />
                </View>
                <Text style={style.labelButton}>Entradas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.actionButton}>
                <View style={style.areaButton}>
                    <AntDesign name="tagso" size={26} color="#000" />
                </View>
                <Text style={style.labelButton}>Compras</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.actionButton}>
                <View style={style.areaButton}>
                    <AntDesign name="creditcard" size={26} color="#000" />
                </View>
                <Text style={style.labelButton}>Carteira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.actionButton}>
                <View style={style.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000" />
                </View>
                <Text style={style.labelButton}>Boletos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.actionButton}>
                <View style={style.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
                </View>
                <Text style={style.labelButton}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}