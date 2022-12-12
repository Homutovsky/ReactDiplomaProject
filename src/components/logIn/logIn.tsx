import { useState, ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Container } from '@mui/material'

import Button from '@mui/material/Button';
import { PatternTextField } from "../common/patternTextFild";

import { buttonStyle, Form } from "../common/style.styled";

import { useTheme } from "../theme/ThemeProvider";

import { UserContext } from "../../userContext";


export const LogIn = () => {

  const {setUserName} = useContext(UserContext)

  const currentTheme = useTheme()

  const login = PatternTextField('');

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const onLogin = () => {
    setUserName(login.value)
    Cookies.set('logined', 'true', { expires: 1/24/60*50 })
    navigate('/films', {replace:true})
  }

  const onSignUp = () => {
    Cookies.set('logined', 'true', { expires: 1/24/60*50 })
    navigate('/SignUp')
  }
  const navigate = useNavigate();
  
  const handleChange = (prop:string) => (event:ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = ():void => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword:any = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const [controler, setControl] = useState(false)
  const toggleControler = () => {
    setControl((prev) => !prev)
  }
  
  const changeThemeStyle = { m: 1, 
    width: '25ch',
    '& label.Mui-focused': {
      color: currentTheme.theme.color,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: currentTheme.theme.color,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: currentTheme.theme.color,
      },
      '&.Mui-focused fieldset': {
        borderColor: currentTheme.theme.color,
      },
    },
  }


  return (  
    <Container maxWidth="sm">
      <Box sx={{...currentTheme.theme, background:null, backgroundColor:null}}>    
        <Form>
          <h1 className='FormName'>Log In</h1>
            <TextField 
            value={login.value}
            onChange={login.onChange}
            label="Login"
            id="outlined-start-adornment"
            sx={changeThemeStyle}
            placeholder='Enter login'
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
          <FormControl 
            sx={changeThemeStyle} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ?  <Visibility />:<VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormGroup>
            <FormControlLabel onChange={toggleControler} control={<Checkbox /> } label="accept the terms" />
          </FormGroup>
          
          <Button 
          onClick={onLogin} disabled={(login.value && values.password && controler )? false:true} variant="contained">Log In</Button>
    
          <Button onClick={onSignUp} style={{...buttonStyle}}  >
                      Registration
          </Button>        
        </Form>        
      </Box>
    </Container>
    
  )
}

