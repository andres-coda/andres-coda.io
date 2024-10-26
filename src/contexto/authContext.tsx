import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface AuthContextType {
    authLogin: boolean;
    setAuthLogin: (value: boolean) => void;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

interface PropsAuth {
    children:ReactNode;
}

export const ProviderAuth = ({children}:PropsAuth) => {
    const [ authLogin, setAuthLogin] = useState(false);

    useEffect(()=>{
        setAuthLogin(true);
    },[]);

    return (
        <authContext.Provider value={{ authLogin, setAuthLogin }}>
            {children}
        </authContext.Provider>
    );
}

export const useAuthContext = () => {
    const contextoAuth = useContext(authContext);
    if (contextoAuth===undefined) {
        throw new Error ('El contexto globalContexto no existe');
    }
  
    return contextoAuth;
  }