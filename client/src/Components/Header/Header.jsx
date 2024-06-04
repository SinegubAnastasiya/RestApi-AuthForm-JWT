import { useState, useEffect } from 'react';
import style from './header.module.css';
import Button from '@mui/material/Button';
import JsCookie from 'js-cookie'
import { Link } from 'react-router-dom'

function Header() {
    const [token, setToken] = useState()

    function getToken() {
        const applicationToken = JsCookie.get('accessToken')
        setToken(applicationToken)
    }

    useEffect(() => {
        getToken()
    })

    function deleteToken() {
        JsCookie.remove('accessToken')
        setToken('')
    }

    return <>
        <div className={style.wrapper}>
            <div className={style.btn}>
            {token ?
                <Link to={'/'}>
                <Button onClick={deleteToken} style={{ color: 'black', font: '400 16px Inter' }} variant="text">Log Out</Button>
                </Link>
                :
                <>
                    <Button style={{ color: 'black', font: '400 16px Inter' }} variant="text">Sign In</Button>
                    <Button style={{ color: 'black', font: '400 16px Inter' }} variant="text">Sign Up</Button>
                </>
            }
        </div>
        <div className={style.line}></div>
    </div >
    </>
}
export default Header