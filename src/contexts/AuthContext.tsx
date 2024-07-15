import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AuthApi } from '../apis/AuthAPI';

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = async () => {
        await AuthApi.logout();
        setIsLoggedIn(false);
    };

    useEffect(() => {
        AuthApi.me()
            .then(() => {
                login();
            })
            .catch(() => {
                logout();
            });
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
