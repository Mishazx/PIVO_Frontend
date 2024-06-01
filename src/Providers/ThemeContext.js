import { useState, useEffect, useContext, createContext  } from "react";

const ThemeContext = createContext();

function detectSystemTheme() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = isDarkMode ? 'dark' : 'light'
    localStorage.setItem('theme', theme);
    const html = document.documentElement;
    const body = document.body;
    if (theme === 'light'){
        html.style.background = '#EEE';
        body.style.background = '#EEE';
    } else {
        html.style.background = '#333';
        body.style.background = '#333';
    }
    return theme
}


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(detectSystemTheme);

    const html = document.documentElement;
    const body = document.body;
    if (theme === 'light'){
        html.style.background = '#EEE';
        body.style.background = '#EEE';
    } else {
        html.style.background = '#333';
        body.style.background = '#333';
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme); // Set a data-theme attribute


    }



    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.setAttribute('data-theme', storedTheme); // Set a data-theme attribute
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleThemeChange = (e) => {
            const systemTheme = e.matches ? 'dark' : 'light';
            setTheme(systemTheme);
            document.documentElement.setAttribute('data-theme', systemTheme); // Set a data-theme attribute
            localStorage.setItem('theme', systemTheme);

        };

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleThemeChange);
        } else if (mediaQuery.addListener) {
            mediaQuery.addListener(handleThemeChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleThemeChange);
            } else if (mediaQuery.removeListener) {
                mediaQuery.removeListener(handleThemeChange);
            }
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
    const data = useContext(ThemeContext);
    return data.theme;
};

export const useToggleTheme = () => {
    const data = useContext(ThemeContext);
    return data.toggleTheme;
};

// export default ThemeContext;
