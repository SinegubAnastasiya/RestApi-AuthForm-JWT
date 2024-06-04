import Header from '../../Components/Header/Header';
import style from './auth.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

function Auth() {
    const [data, setData] = useState()

    const navigation = useNavigate()

    function getInp(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function authUser() {
        const response = await axios.post('http://localhost:3001/user/auth', data, { withCredentials: true })
        console.log(response);
        navigation('/home')
    }

    return <>
        <Header />
        <div className={style.wrapper}>
            <h1>Sign In</h1>
            <p>Log in to access your account or create one. Verify your email for seamless access.</p>

            <div>
                <TextField onChange={getInp} name='email' className={style.textField} id="outlined-basic" label="Your email" variant="outlined" />
            </div>
            <div>
                <TextField onChange={getInp} name='password' className={style.textField} id="outlined-basic" label="Password must be at least 8 characters." variant="outlined" />
            </div>
            <div className={style.button}>
                <div className={style.info}>
                    <Button onClick={authUser} variant="contained">Continue</Button>
                    <p>Not registered yet?
                        <Link to={'/reg'}>Sign Up</Link></p>
                </div>
            </div>

        </div>
    </>
}

export default Auth