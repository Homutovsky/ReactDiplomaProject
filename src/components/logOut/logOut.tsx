import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import {  useNavigate } from 'react-router-dom'
import { useTheme } from '../theme/ThemeProvider';

export const LogOut = () => {
  const navigate = useNavigate();
  const currentTheme = useTheme();

  const isLogOut = () => {
    Cookies.remove('logined')
    navigate('/', {replace:true})
  }

  return (
    <Button variant="contained" sx={{color:currentTheme.theme.color, marginLeft:'10px', background:'#6b29a6'}} onClick={isLogOut} >
      Log out
    </Button>  
  )
}
