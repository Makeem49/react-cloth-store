import React, {createContext, useState, useEffect} from "react";


export const ThemeContext = createContext()

export default function ThemeProvider(props) {
    const [theme, SetTheme] = useState(() => {
        const getTheme = localStorage.getItem('theme')
        console.log( getTheme)
        if (!getTheme) {
            return 'light'
        } else {
            return getTheme
        }

    })

    
    useEffect(() => {
        localStorage.setItem('theme', theme)
        
        return () => {
            localStorage.clear()
        }
    })
    
    function handleToggleTheme() {
        if (theme === 'light') {
            SetTheme('dark')
        } else if(theme === 'dark'){
            SetTheme('light')
        }
    }


    const value ={
        theme : theme,
        toggleTheme : handleToggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}