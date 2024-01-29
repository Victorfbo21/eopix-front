import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Button,
    Image
} from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { api } from "../../../http";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons"
import { showToast } from "../../../utils";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";

export default function Login() {


    const auth = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()


    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (email && password) {
                showToast('Logado com Sucesso!')
                return navigation.navigate('App')
            }

            showToast('Usuário ou Senha Inválidos')
        }
        catch (err) {

        }
        finally {
            setIsLoading(false)
        }

    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/logo.png')} />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <Feather name="user" size={27} color="#ffa500" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <Feather name="lock" size={27} color="#ffa500" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="Senha"
                    secureTextEntry
                />
            </View>
            <View style={styles.forgot}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonRegister}>Não possui Conta? Registre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSubmit}>
                    <Text style={styles.buttonForgotText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}