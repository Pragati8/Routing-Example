import { createContext,useState } from "react";

export const Login = createContext();

const Context = ({children}) => {

    const [login, setLogin] = useState('loginState');
    return (<Login.Provider value={{login, setLogin}}>{children}</Login.Provider>);
};

export default Context;