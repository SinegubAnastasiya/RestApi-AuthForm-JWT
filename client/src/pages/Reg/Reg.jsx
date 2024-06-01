import style from './reg.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Reg() {
    return <>
        <div className={style.wrapper}>
            <h1>Welcome, let us create an account</h1>
            <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>

            <div className={style.userInfo}>
                <TextField className={style.textField} id="outlined-basic" label="Your name" variant="outlined" />
                <TextField className={style.textField} id="outlined-basic" label="Your surname" variant="outlined" />
            </div>

            <div>
                <TextField className={style.textField} id="outlined-basic" label="Your email" variant="outlined" />
            </div>
            
            <div>
                <TextField className={style.textField} id="outlined-basic" label="Password must be at least 8 characters." variant="outlined" />
            </div>

            <div className={style.button}>
                <div className={style.info}>
                    <Button variant="contained">Continue</Button>
                    <p>Already registered? Sign In</p>
                </div>
            </div>
        </div>
    </>
}

export default Reg