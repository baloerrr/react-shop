import React, { createContext, useContext, useState, useEffect } from 'react'
import Hero1 from '../assets/images/HeroLight.gif'
import Hero2 from '../assets/images/HeroDark.gif'

// ...
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [heroImage, setHeroImage] = useState(Hero1) // Set heroImage sesuai dengan tema awal (light)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setHeroImage(theme === 'dark' ? Hero1 : Hero2) // Sesuaikan dengan tema yang dipilih
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, heroImage }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
