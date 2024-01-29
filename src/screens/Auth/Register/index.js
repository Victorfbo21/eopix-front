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
import { TextInputMask } from 'react-native-masked-text';


export default function Regiter() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()


    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (email && password && name && phone) {
                console.log(email, password, name, phone)
                showToast('Cadastrado com Sucesso!')
                return navigation.navigate('Login')
            }

            showToast('Dados Inválidos')
        }
        catch (err) {

        }
        finally {
            setIsLoading(false)
        }

    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/register.png')} />
            <Text style={styles.title}>Cadastro</Text>
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
                <Feather name="edit-3" size={27} color="#ffa500" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                    placeholder="Nome"

                />
            </View>
            <View style={styles.inputContainer}>
                <Feather name="smartphone" size={27} color="#ffa500" style={styles.icon} />
                <TextInputMask
                    style={styles.input}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    onChangeText={(formatted, extracted) => {
                        setPhone(extracted);
                    }}
                    value={phone}
                    placeholder="Contato"
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
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonForgotText}>Já Possui Conta? Logar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}