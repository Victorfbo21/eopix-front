import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { style } from "./style";
import { useState } from "react";


export default function Movements({ data }) {

    const [showValue, setShowValue] = useState(false)
    const handleShowValue = () => setShowValue((show) => !show)

    return (
        <TouchableOpacity style={style.container} onPress={handleShowValue}>
            <Text style={style.date}>
                {data.date}
            </Text>

            <View style={style.content}>
                <Text style={style.label}>{data.label}</Text>
                {showValue ? (
                    <Text style={data.type === 1 ? style.value : style.expenses}>
                        R$ {data.type === 1 ? data.value : `-${data.value}`}
                    </Text>
                ) : (
                    <View style={style.skeleton}>

                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}