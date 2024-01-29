import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabRoutes from "./tab.routes";
import Login from "../screens/Auth/Login";

const Stack = createNativeStackNavigator();


export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="App" component={TabRoutes} />
        </Stack.Navigator>
    )
}