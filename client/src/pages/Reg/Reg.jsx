import style from './reg.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function Reg() {
    const [data, setData] = useState({})

    function getInp(e) {
        setData({...data, [e.target.name]: e.target.value})
    }

    async function regUser() {
        const response = await axios.post('http://localhost:3001/user', data)
        console.log(response.data);
    }

    return <>
        <Header />
        <div className={style.wrapper}>
            <h1>Welcome, let us create an account</h1>
            <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>

            <div className={style.userInfo}>
                <TextField onChange={getInp} name = 'name' className={style.textField} id="outlined-basic" label="Your name" variant="outlined" />
                <TextField onChange={getInp} name = 'surname' className={style.textField} id="outlined-basic" label="Your surname" variant="outlined" />
            </div>

            <div>
                <TextField onChange={getInp} name = 'email' className={style.textField} id="outlined-basic" label="Your email" variant="outlined" />
            </div>
            
            <div>
                <TextField onChange={getInp} name = 'password' className={style.textField} id="outlined-basic" label="Password must be at least 8 characters." variant="outlined" />
            </div>

            <div className={style.button}>
                <div className={style.info}>
                    <Button onClick={regUser} variant="contained">Continue</Button>
                    <p>Already registered? 
                        <Link to={'/'}>Sign In</Link></p>
                </div>
            </div>
        </div>
    </>
}

export default Reg