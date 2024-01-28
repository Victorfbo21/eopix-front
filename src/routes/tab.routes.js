import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/index."
import New from "../screens/New"
import { Feather } from "@expo/vector-icons"
import Settings from "../screens/Settings"

const Tab = createBottomTabNavigator();


export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Início'
                }} />
            <Tab.Screen
                name="New"
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Novo'
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} />,
                    tabBarLabel: 'Configurações'
                }}
            />
        </Tab.Navigator>
    )
}