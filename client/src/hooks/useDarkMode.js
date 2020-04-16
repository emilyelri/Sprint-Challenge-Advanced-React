import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode () {

    const [isDarkMode, setDarkMode] = useLocalStorage('darkMode');

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("darkmode");
            document.getElementById("darkmode-btn").innerHTML = '🌞';
        } else {
            document.body.classList.remove("darkmode");
            document.getElementById("darkmode-btn").innerHTML = '🌙';
        }
    }, [isDarkMode])

    return [isDarkMode, setDarkMode];
}