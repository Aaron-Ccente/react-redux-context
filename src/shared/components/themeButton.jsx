import React, { useState } from 'react'

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
    <div className='bg-background text-foreground w-fit ' onClick={handleChangeTheme}>{theme==='light'? 'Cambiar a modo oscuro':'Cambiar a modo claro' }</div>
  )
}
