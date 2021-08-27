import { createSlice } from '@reduxjs/toolkit'
import { lightTheme, darkTheme } from'../../assets/styles/theme'
import { ColorPallete } from '../../model'
import ls from 'localStorage'

const themePallete: { [key: string]: ColorPallete } = {
  dark: darkTheme,
  light: lightTheme,
}

const initialState: themeState = {
  theme: themePallete[ls.getItem('theme')||'dark'],
}

interface themeState {
  theme: ColorPallete
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = { ...themePallete[action.payload] }
      ls.setItem('theme', action.payload)
    },
  },
})

export const themeActions = themeSlice.actions

export default themeSlice.reducer
