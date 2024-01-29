import { createContext, useEffect, useState } from 'react';
import { api } from '../http/index'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    
    
    const [user, setUser] = useState();
    
    const login = async (data) => {
        try {
            const response = await api.post('/auth/login', { email: data.email, password: data.password })
            if (response) {
                const { data } = response
                // localStorage.setItem("user", JSON.stringify(data.data.user))
                setUser(data.data.user)
                return data
            }
        }
        catch (err) {
            const { data } = err.response
            return data
        }
    }

    const signOut = () => {
        setUser(null);
    }


    const updatePassword = async (updateData) => {
        try {
            const response = await api.post('/users/update-password', updateData)

            if (response) {
                const { data } = response

                return data
            }
        }
        catch (err) {
            const { data } = err.response
            return data
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            signOut,
            login,
            updatePassword
        }}>
            {children}
        </AuthContext.Provider>
    );
}