import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const list = [
    {
        id: 1,
        label: 'Boleto de Conta da Luz',
        value: '300,90',
        date: '17/09/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix Julia',
        value: '2500,90',
        date: '17/09/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Pix Victor',
        value: '300,90',
        date: '17/09/2022',
        type: 2
    },
    {
        id: 4,
        label: 'Pix Bia',
        value: '250,00',
        date: '17/09/2023',
        type: 1
    },
]

export default function Home() {

    const auth = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Header name={auth.user.name} />
            <Balance gastos={"-7.0000"} saldo={"15.0000"} />
            <Actions />
            <Text style={styles.title}>Ultimas Movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    )
}