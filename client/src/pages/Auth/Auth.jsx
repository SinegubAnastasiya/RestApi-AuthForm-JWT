import style from './auth.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Auth() {
    return <>
        <div className={style.wrapper}>
            <h1>Sign In</h1>
            <p>Log in to access your account or create one. Verify your email for seamless access.</p>

            <div>
                <TextField className={style.textField} id="outlined-basic" label="Your email" variant="outlined" />
            </div>
            <div>
                <TextField className={style.textField} id="outlined-basic" label="Password must be at least 8 characters." variant="outlined" />
            </div>
            <div className={style.button}>
                <div className={style.info}>
                    <Button variant="contained">Continue</Button>
                    <p>Not registered yet? Sign Up</p>
                </div>
            </div>
        </div>
    </>
}

export default Auth