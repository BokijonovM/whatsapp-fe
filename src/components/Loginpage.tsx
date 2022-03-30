import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions";

const theme = createTheme();
interface ILoginUser {
  email : string,
  password : string
}

export const Loginpage = () => {

  const navigate = useNavigate()
  const [loginErr, setLoginErr] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const [userLogin, setUserLogin] = useState<ILoginUser>({
    email: "",
    password: ""
  })

  useEffect(() => {
    if(Object.keys(loginErr).length === 0 && isSubmit){
        console.log("I am going to submit")
        loginFunc()
    }
}, [loginErr])


const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    setUserLogin({...userLogin, [e.currentTarget.name]:e.currentTarget.value})
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submit init")
    setLoginErr(validateForm(userLogin))
    setIsSubmit(true)
    
}

const validateForm = (userLogin:ILoginUser) => {
  console.log("verifying user",userLogin)

    const regex = /\S+@\S+\.\S+/
    const errors:ILoginUser = {email:"",password:""} 
    errors.email = !userLogin.email? "email is missing" : (!regex.test(userLogin.email))? "Email is not valid":""
    errors.password = !userLogin.password? "password is missing":""
    return errors
}

  const dispatch = useDispatch();

  const loginFunc = async () => {
    
    // dispatch(login(email, password));
    try {
      const response = await fetch('https://whatsapp-clone-epicode.herokuapp.com/users/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login)
    })
    if(response.ok){
      const data = await response.json()
      console.log(data)
      console.log("logged in ")
    }
  }catch (error) {
    console.log (error) 
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <span className='danger' style={{display:Object.keys(loginErr).length!==0? 'block':'none'}}>
                 {loginErr.email}
                <br/>
                {loginErr.password}    
            </span>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 3, bgcolor: "rgb(46, 223, 46)", fontsize: "25px" }}>
            <WhatsAppIcon style={{ fontSize: 35 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={(e:any) => handleSubmit(e)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange ={(e:any)=>handleChange(e)}
            />
            <TextField
              required
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange ={(e:any)=>handleChange(e)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link to="/" >
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/">{"Don't have an account? Register"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
};
