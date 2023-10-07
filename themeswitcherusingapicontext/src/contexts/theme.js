// ye diffrent approch h.

import React, { createContext, useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

// to app context provider ko variable as well as function bhi de sakte ho.



export const ThemeProvider = ThemeContext.Provider;
export default function useTheme(){
    return useContext(ThemeContext);
}