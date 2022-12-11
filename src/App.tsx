import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Cookies from "js-cookie";

import {LogIn} from './components/logIn/logIn';
import {SignUp} from './components/signUp/signUp';

import {ThemeContext, useTheme} from './components/theme/ThemeProvider'
import { themes } from './components/theme/themes';

import './App.css'
import { Header } from "./components/Header/Header";
import { Profile } from "./components/profile/profile";
import { UserPost } from "./components/userPost/userPost";
import { Film } from "./components/film/film";
import { UserContext } from "./userContext";
import { StyledApp } from "./components/common/style.styled";
import { FoundFilms } from "./components/foundFilms/foundFilms";
import { Films } from "./components/films/films"
import { SelectedFromSearch } from "./components/foundFilms/selectedFromSearch/selectedFromSearch";
import { ErrorPage } from "./components/errorPage/errorPage";


function App(): JSX.Element {

  interface themeType {
    type:string,
    backgroundColor:string,
    height:string,
    color: string
  }

  const [userName, setUserName] = useState('')
  const value = useMemo(
    () => ({ userName, setUserName }), 
[userName]);

  const currentTheme = useTheme()
  const [theme, setTheme] = useState(currentTheme)
  const turnTheme = () => {
    setTheme((prev:themeType)=> prev.type === 'light' ? themes.dark : themes.light)
  }

  const [logined, setLogined] = useState(false)
  
  const navigate = useNavigate()
  const location = useLocation()

  setInterval(() => {
    const isLogined:any = Cookies.get('logined')
    if(!isLogined) {
      setLogined(false)
      navigate('/')
    }
  }, 1000 * 60)

  useEffect(() => {
    const isLogined:any = Cookies.get('logined')
    setLogined(isLogined)

    if(isLogined && location.pathname === '/SignUp') {
      setLogined(false)
    }
    if(!isLogined) {
      navigate('/')
    } 
    if(isLogined && location.pathname === '/') {
      navigate('/posts')
    }
  },[location.pathname, navigate])

  return (
    <UserContext.Provider value={value}>
      <ThemeContext.Provider value={{theme:theme, turnTheme}}>
        <StyledApp className='rootDiv' theme={theme}>
          {logined && <Header/>}
                <Routes>
                  <Route path='/' element={<LogIn/>}/>
                  <Route path='/SignUp' element={<SignUp/>}/>
                  <Route path='/films' element={<Films/>}/>
                  <Route path='/userPost' element={<UserPost/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/films/:id' element={<Film/>}/>
                  <Route path='/foundFilms/:name' element={<FoundFilms/>}/>
                  <Route path='/selectedFromSearch/:id' element={<SelectedFromSearch/>}/>
                  <Route path='/errorPage' element={<ErrorPage/>}/>
                </Routes>
        </StyledApp>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App;
