import { createContext, useContext, useEffect, useState } from "react"
import { en } from "./en"
import { es } from "./es"

type Language = "en" | "es"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

type LanguageProviderState = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, params?: Record<string, string>) => string
  translations: any
}

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  t: () => "",
  translations: en as any,
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

const translations = {
  en,
  es,
}

// Helper function to get nested object value by dot notation
const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

// Template string replacement function
const interpolate = (template: string, params: Record<string, string> = {}): string => {
  return template.replace(/\{(\w+)\}/g, (match, key) => params[key] || match)
}

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "portfolio-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('lang', language)
  }, [language])

  const t = (key: string, params?: Record<string, string>): string => {
    const translation = getNestedValue(translations[language], key)
    if (typeof translation === 'string') {
      return interpolate(translation, params)
    }
    
    // Fallback to English if translation not found
    const fallback = getNestedValue(translations.en, key)
    if (typeof fallback === 'string') {
      return interpolate(fallback, params)
    }
    
    // Return key if no translation found
    return key
  }

  const value = {
    language,
    setLanguage: (newLanguage: Language) => {
      localStorage.setItem(storageKey, newLanguage)
      setLanguage(newLanguage)
    },
    t,
    translations: translations[language],
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}
