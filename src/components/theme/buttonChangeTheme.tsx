import { useTheme } from './ThemeProvider'
import { MaterialUISwitch } from '../common/style.styled'

export const ButtonChangeTheme = () => {

  const currentTheme = useTheme()
  
  return (
    <MaterialUISwitch onClick={currentTheme.turnTheme}/>
  )
}
