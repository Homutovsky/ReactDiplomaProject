import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { divForMap, inputStyle } from '../common/style.styled';
import { useTheme } from '../theme/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { addFilmFromSearchInArr } from '../redux/reducer/filmsSlice';
import { Event } from '@mui/icons-material';

export const FoundFilms = () => {
  const dispatch = useDispatch()
  const currentTheme = useTheme()
  const params = useParams()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [searchResult, setSearch] = useState<any>([])
  
  const getSearch = (event:any) => {
    if (event.code === "Enter" && inputValue !== "") {
      const getFilmByName = async () => {
        try {
          let upperSearchKey = inputValue.split('')[0].toUpperCase() + inputValue.slice(1, inputValue.length)
          const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=${upperSearchKey}&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
          if (responce.data.docs.length) {
            console.log('responce1', responce)
            setSearch(responce)
    
            navigate(`/foundFilms/${searchResult.data.docs[0].name}`)
          } else {
            navigate(`/errorPage`)
          }

        }
        catch (error) {
      }
    }
    getFilmByName()  
    }
  }

  const getFilmByName = async () => {
        try {
          const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=${params.name}&limit=20&sortField=year&sortType=-1&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)

          if (responce.data.docs.length) {

            const filteredResult = responce.data.docs.reduce((acc:any, item:any) => (item.poster && item.description)?[...acc, item]:acc,[])

            setSearch(filteredResult)
          }
          
        }
        catch (error) {
      }
    }
    useEffect(() => {
      
      getFilmByName()  
    },[])
    
    
  return (
    <>
    <div className={'background'}></div>
    <div style={{position:'relative', zIndex:'1'}}>
      <div style={{display:'flex', justifyContent:'flex-end', maxWidth:'1350px', margin:'0 auto'}}>
        <input onKeyDown={getSearch} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" style={inputStyle}/>
      </div>
      {searchResult.map((item:any) => (
        
          <div style={{display:'flex', columnGap:'50px', maxWidth:'1350px', margin:'0 auto', justifyContent:'center'}}>
            <NavLink style={{textDecoration:'none', color:currentTheme.theme.color}} to={`/selectedFromSearch/${item.id}`}>
              <div>
                  <h2 style={{textAlign:'center', display:'flex', flexWrap:'wrap', maxWidth:'360px', }}>
                {item?.name || item?.alternativeName}({item?.year})
                </h2>
                  <img src={`${item.poster?.previewUrl}`} alt="poster"></img>
              </div>
            </NavLink>
          <div style={{display:'flex', flexDirection:'column', marginTop:'51px', maxWidth:'400px', color:currentTheme.theme.color}}>
            <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Typography component="legend">Rating</Typography>
                    <Rating name="read-only" value={Math.round(item.rating?.imdb/2)} readOnly />
            </Box>
            <div style={divForMap}>
                <h3>страна: </h3>
                {item.countries?.map((item:any) => ( 
                      <p key={item?.name}>/ {item?.name}</p>    
                      ))}
            </div>
            <div style={divForMap}>
                <h3>жанр: </h3>
                {item.genres?.map((item:any) => ( 
                    <p key={item?.name}> / {item?.name} </p>    
                    ))}
            </div>
            <h3>описание :</h3>
            <p>
                {item?.description}
            </p>
            <h3>премьера({item.premiere?.country}) : {item.premiere?.world?.split('').splice(0, 10).join('')}</h3>
          </div>
        </div>
        
      ))}
    </div>
    </>
    
  )
}
