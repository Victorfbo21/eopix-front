
export default function RequireAuth() {
    const isAuthenticated = !!localStorage.getItem('access-token');

    if (!isAuthenticated) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return <>
    </>
};