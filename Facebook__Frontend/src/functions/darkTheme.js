//add dark mode with tailwind.css #sanctus#

const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

export const themeCheck = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark')
    return
  }
}

export const lightTheme = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    return
  }
}

export const darkTheme = () => {
  if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    return
  }
}

export const themeSwitcher = (ref) => {
  const name = Object.values(ref.current.classList)
  if (name.includes('dark')) {
    darkTheme()
  } else if (name.includes('light')) {
    lightTheme()
  } else {
    themeCheck()
  }
}
