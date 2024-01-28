import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Button
} from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { api } from "../../../http";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            console.log(email, password)
        }
        catch (err) {

        }
        finally {
            setIsLoading(false)
        }

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                value={password}
                placeholder="Senha"
                secureTextEntry
                keyboardType="numeric"
            />
            <Button
                onPress={onSubmit}
                style={styles.button}
                title="Login"
            >
            </Button>
        </View>
    )
}