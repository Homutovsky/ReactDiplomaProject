import { FC, FormEvent } from "react"

import { Form, NavLinkStyle, RegisteredContainer } from "../common/style.styled";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { PatternTextField } from "../common/patternTextFild";
import { useTheme } from "../theme/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Cookies from "js-cookie";


interface SignUpPropsType {
  onSubmit:(param:{}) => void,
  setIsLogined:any
}

export const SignUp: FC<any> = ( {onSubmit, setIsLogined}:SignUpPropsType) => {

  const {value:firstName, onChange:setFirstName} = PatternTextField('');
  const {value:lastName, onChange:setLastName} = PatternTextField('');
  const {value:emailAddress, onChange:setEmailAddress} = PatternTextField('');
  const {value:password, onChange:setPassword} = PatternTextField('');
  const {value:repeatPassword, onChange:setRepeatPassword} = PatternTextField('');
  const sendForm = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({firstName, lastName, emailAddress, password})
  }
  const onSignIn = () => {
    Cookies.remove('logined')
    setIsLogined(false)
    navigate('/')
  }

  const navigate = useNavigate();

  const currentTheme = useTheme();

  const changeThemeStyle = { 
    m: 1, 
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
      <Box sx={{...currentTheme.theme, background:null, backgroundColor:null, backgroundImage:null }}>
        <Form onSubmit={sendForm}>
          <h1 className='FormName'>Sign Up</h1>
        
          <TextField
          InputProps={{
            sx:{color: currentTheme.theme.color}
          }}
          sx={changeThemeStyle}
          required
          id="outlined-required"
          label="First name"
          placeholder="Enter first name"
          value={firstName}
          onChange={setFirstName}
          />
          <TextField
          InputProps={{
            sx:{color: currentTheme.theme.color}
          }}
          sx={changeThemeStyle}
          required
          id="outlined-required"
          label="Last name"
          placeholder="Enter your last name"
          value={lastName}
          onChange={setLastName}
          />
          <TextField
          InputProps={{
            sx:{color: currentTheme.theme.color}
          }}
          sx={changeThemeStyle}
          required
          id="outlined-required"
          label="Email adress"
          placeholder="Enter email adress"
          value={emailAddress}
          onChange={setEmailAddress}
          />
          <TextField
          InputProps={{
            sx:{color: currentTheme.theme.color}
          }}
          sx={changeThemeStyle}
          required
          id="outlined-required"
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
          />
          <TextField
          InputProps={{
            sx:{color: currentTheme.theme.color}
          }}
          sx={changeThemeStyle}
          required
          id="outlined-required"
          label="Repeat password"
          placeholder="Repeat password"
          value={repeatPassword}
          onChange={setRepeatPassword}
          />
          <Button
          onClick={onSignIn}
          type="submit" 
          variant="contained" 
          disableElevation
          disabled={(firstName && lastName && emailAddress && password && repeatPassword)? false:true}
          >
          Sign Up
          </Button>
          <RegisteredContainer>
            <p>Already registered</p>
            <Button style={NavLinkStyle} onClick={onSignIn} >sign in?</Button>
          </RegisteredContainer>
        </Form>
      </Box>
    </Container>
    
  )
}


