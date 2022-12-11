import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { inputStyle } from "../common/style.styled"
import { useTheme } from "../theme/ThemeProvider"


export const ErrorPage = () => {
  const [posts, setPosts] = useState<any>([])
  const currentTheme = useTheme()
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

  return (
    <div style={{height: 'calc(100vh - 58px)'}}> 
    <div style={{display:'flex', justifyContent:'flex-end', maxWidth:'1350px', margin:'0 auto'}}>
        <input onKeyDown={getSearch} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" style={inputStyle}/>
      </div>
    <h1 style={{textAlign:'center'}}>
      По вашему запросу ничего не найдено !
    </h1>
    </div>
  )
}
