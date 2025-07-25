// "use client"

// import { createContext, useContext, useEffect, useState } from "react"

// type DarkModeContextType = {
//   darkMode: boolean
//   toggleDarkMode: () => void
// }

// const DarkModeContext = createContext<DarkModeContextType>({
//   darkMode: false,
//   toggleDarkMode: () => {},
// })

// export function DarkModeProvider({ children }: { children: React.ReactNode }) {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     // Initialize from localStorage (ignore system preferences)
//     const saved = localStorage.getItem('darkMode')
//     if (saved !== null) {
//       setDarkMode(saved === 'true')
//       document.documentElement.classList.toggle('dark', saved === 'true')
//     }
//   }, [])

//   const toggleDarkMode = () => {
//     const newMode = !darkMode
//     setDarkMode(newMode)
//     localStorage.setItem('darkMode', String(newMode))
//     document.documentElement.classList.toggle('dark', newMode)
//   }

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   )
// }

// export const useDarkMode = () => useContext(DarkModeContext)