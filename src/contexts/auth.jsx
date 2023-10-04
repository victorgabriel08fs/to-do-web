import React, { createContext, useState, useEffect, useContext } from 'react';

import { api } from '../services/api.js';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storagedUser = sessionStorage.getItem('@To-do:user');

        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
    }, []);

    async function Login(userData, remember) {
        const response = await api.post('auth/login', userData);
        setUser(response.data.user);

        if (remember) {
            sessionStorage.setItem('@To-do:user', JSON.stringify(response.data.user));
        }
    }

    async function Register(userData) {
        const response = await api.post('auth/register', userData);

        await Login({ email: userData.email, password: userData.password }, true);
    }

    function Logout() {
        setUser(null);
        sessionStorage.setItem('@To-do:user', "");
    }

    return (
        <AuthContext.Provider
            value={{ signed: Boolean(user), user, Login, Logout, Register }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}