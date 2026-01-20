import { useState } from 'react'
export default function ThemeButton() {
    const [theme, setTheme] = useState('light');
    const root = document.documentElement;

    const handleChangeTheme = () =>{
        const newTheme = theme === 'light' ? 'dark': 'light';
        if(newTheme === 'dark'){
            root.classList.add('dark');
        }
        else{
            root.classList.remove('dark');
        }
        setTheme(newTheme);
    }

  return (
    <div onClick={handleChangeTheme}>{theme === 'dark'? 'Cambiar a modo claro': 'Cambiar a modo oscuro'}</div>
  )
}
