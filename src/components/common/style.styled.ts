import styled from 'styled-components'
import { styled as styled1} from '@mui/material/styles';
import Switch from '@mui/material/Switch';


interface Styles {
    [key:string] :string
}

export const MaterialUISwitch = styled1(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
            opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
    },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    },
    '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
    },
}));


export const StyledApp = styled.div`
${({theme}) => {
    return `
    height:100%;
    background:${theme.background}`
}}
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    max-width:250px;
    margin:0px auto;
    gap:20px;
`

export const RegisteredContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-item:center;
    text-decoration:none;
`

export const HeaderWrapper = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content:space-around;
`

export const buttonStyle = {
    margin:'0 auto',
    display:'block',
};

export const NavLinkStyle:Styles =  {
    textDecoration:'none',
    display:'flex',
    textTransform:'lowercase'
}

export const LinkStyle = {
    textDecoration:'none',
    cursor:'pointer'
}

export const divStyle:Styles = {
    height:'400px',
    width:'300px'
}

export const postBlock:Styles = {
    height: '485px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #000',
    textDecoration:'none'
}

export const wrapperStyle:Styles = {
    margin:'50px auto 0 auto', 
    listStyleType: 'none',
    justifyContent:'space-between',
    columnGap:'221px',
    rowGap: '100px',
    padding: '0',
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
}

export const imgStyle:Styles = {
    width: '100%',
    height: '100%',
    objectFit:'cover',
}

export const h4Style:Styles = {
    textAlign:'center',
    maxWidth:'300px'
}

export const divForMap:Styles = {
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center'
}

export const styleDiv:Styles = {
    display:'flex', 
    flexDirection:'column', 
    alignItems:'flex-end',
    maxWidth:'1350px',
    margin:'0 auto',
}

export const inputStyle:Styles = {
    width:'270px',
    padding:'15px',
    border:'1px solid #000',
    borderTop:'none',
    borderRadius:'0 0 10px 10px ',
    outline: '0',
}

export const headerStyle:Styles = {
    display:'flex', 
    alignItems:'center', 
    width:'1350px',
    margin: '0 auto',
    justifyContent: 'space-between',
    position:'relative', 
    left: '0',
    top: '0',
    zIndex:'2'
}