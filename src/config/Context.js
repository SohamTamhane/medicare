import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const Context = createContext();

const AppContext = ({children}) => {

    const [loginInfo, setLoginInfo] = useState();

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoginInfo({status: true, user: user});
            }
            else{
                setLoginInfo({status: false, user: user});
            }
        })
    }, []);

    return(
        <Context.Provider value={{
            loginInfo, setLoginInfo,
        }}>
            {children}
        </Context.Provider>
    )
}
export default AppContext;