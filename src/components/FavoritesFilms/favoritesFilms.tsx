import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { buttonRemoveFavoritesFilms, divStyle, h4Style, imgStyle, postBlock } from '../common/style.styled';
import { removeFilmToFavorites } from '../redux/reducer/filmsSlice';
import { AppDispatch, RootState } from '../redux/store';
import { useTheme } from '../theme/ThemeProvider';

export const FavoritesFilms = () => {
  const dispatch = useDispatch<AppDispatch>()
  const currentTheme = useTheme()
  const film = useSelector((state:RootState) => state?.films?.favorites)
  const removeFavoritesFilms = (id:any) => {
    dispatch(removeFilmToFavorites(id))
  }
  
  return (
    <div style={{height:'calc(100vh - 58px)'}}>
      <h1 style={{textAlign:'center'}}>Your List</h1>
      <div style={{display:'flex', flexDirection:"row"}}>
        {film.map((item:any) => (
          <div key={item?.id} style={{display:'flex', flexDirection:"column", justifyContent:'space-between'}}>
              <Link to={`/films/${item?.id}`} style={{...postBlock, height:'100%', color: currentTheme.theme.color}}>
                        <h3 style={h4Style}>
                            {item?.name || item?.alternativeName}
                        </h3>
                        <div style={divStyle}>
                            <img style={imgStyle} src={`${item?.poster?.previewUrl}`} alt="poster"></img>
                        </div>
              </Link>
              <button onClick={() => removeFavoritesFilms(item?.id)} style={buttonRemoveFavoritesFilms}></button>
          </div>
        ))}
    </div>
    </div>
    

  )
}
