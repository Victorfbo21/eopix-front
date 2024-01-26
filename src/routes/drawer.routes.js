import { createDrawerNavigator } from "@react-navigation/drawer"
import { Feather } from "@expo/vector-icons"
import Login from "../screens/Auth/Login";
import TabRoutes from "./tab.routes"
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name="Home"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen
                name="login"
                component={Login}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Login'
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={StackRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Meu Perfil'
                }}
            />
        </Drawer.Navigator>
    )
}