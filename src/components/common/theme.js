import React, { useEffect } from 'react'

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/actions'

export default function Theme() {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.states.darkMode)
  
  useEffect(() => {
    const theme = createMuiTheme({
      palette: {
        type:darkMode ? 'dark': 'light',
        primary: {
          main: darkMode ? '#333333' : '#1A76D2',
        },
        secondary: {
          main: '#dc004e',
        },
        background:{
        paper:darkMode ? '#333333':'#fff',
        default:darkMode ? '#212121' :'#F1F3F6'
        },
        error: {
          main: red.A400,
        },
      },
      props:{
        MuiButton: {
          // Name of the rule
          size: 'small',
        },
        MuiTextField:{
          size:'small'
        }
      }
    });
    dispatch(setTheme(theme))
  }, [darkMode]);
  return (
    <></>
  )
}

