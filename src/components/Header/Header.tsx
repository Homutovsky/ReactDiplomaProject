import { NavLink } from 'react-router-dom'
import { headerStyle, HeaderWrapper, LinkStyle } from '../common/style.styled'
import { LogOut } from '../logOut/logOut'
import { ButtonChangeTheme } from '../theme/buttonChangeTheme'
import { useTheme } from '../theme/ThemeProvider'


export const Header = () => {
  const currentTheme = useTheme()

  const style = ({isActive}:any) => isActive? {...LinkStyle, color:`${currentTheme.theme.activeColor}`} :{...LinkStyle, color:`${currentTheme.theme.color}`}

  return (
    <HeaderWrapper style={{borderBottom:'1px solid #000', position:'relative', zIndex:'2'}}>
        <div  style={headerStyle}>
            <NavLink  style={style} to="/films">Films</NavLink>
            <NavLink style={style} to="/favoritesFilms">Favorites Films</NavLink>
            <NavLink style={style} to="/profile">Profile</NavLink>
            <div>
                <ButtonChangeTheme/>
                <LogOut/>
            </div>
        </div>
    </HeaderWrapper>
  )
}
