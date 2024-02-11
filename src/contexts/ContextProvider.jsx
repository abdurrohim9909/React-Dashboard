import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext()

const initialState = {
    cart: false,
    chat: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    useEffect(() => {
        if (localStorage.getItem('colorMode')) {
            console.log('color mode true')
            setCurrentColor(localStorage.getItem("colorMode"))
        }
        if (localStorage.getItem('themeMode')) {
            console.log('color mode true')
            setCurrentMode(localStorage.getItem("themeMode"))
        }
    }, [])

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        console.log('color : ', color)
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)

