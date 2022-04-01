import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { handleBreakpoints } from "@mui/system";
import { Alert } from "react-bootstrap";
import { Console } from "console";

interface IRegUser {

    username: string,
    email: string,
    avatar: string,
    password: string,
}

export const Registerpage = () => {


  const [errorOnReg, setErrorOnReg] = useState(false)
  const error:IRegUser = {    
    username: "",
    email: "",
    avatar: "",
    password: ""} 

  const [regUser, setRegUser] = useState({
    username: "",
    email: "",
    avatar: "",
    password: "",
    
  })
  
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    setRegUser({...regUser,[e.currentTarget.name]:[e.currentTarget.value]})
    console.log(regUser)
  }
  
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      let errors = validateInfo(regUser)
      if(Object.keys(errors).length === 0){
        registerUser()
      }else{
        setErrorOnReg(true)
      }
  }

  const validateInfo = (user:IRegUser) => {
      const regex = /\S+@\S+\.\S+/
     
      error.email = !user.email? "email is missing" : (!regex.test(user.email))? "Email is not valid":""
      error.password = !user.password? "password is missing":""
      error.username = !user.username? "username is missing":""
      
      return error

  }

  

  const registerUser = async () => {
  
    try {
      let res = await fetch(
        `${process.env.REACT_APP_PROD_API_URL}/users/account`,
        {
          method: "POST",
          body: JSON.stringify(regUser),
          headers: { "Content-type": "application/json" },
        }
      );
      if (res.status !== 200) {
        alert("error not 200");
      }
      if (res.ok) {
        let data = await res.json();
        localStorage.setItem("MyAToken", data.accessToken);
        localStorage.setItem("MyRToken", data.accessToken);
        window.location.href = "/main";
        console.log("Successfully logged in!");
      } else {
        console.log("fetch login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

const theme = createTheme();


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Alert variant="danger" style={{display:errorOnReg? "block":"none"}}>
          Error
          {error.username}
          {error.email}
          {error.password}
          </Alert>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "rgb(46, 223, 46)" }}>
            <WhatsAppIcon style={{ fontSize: 35 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitHandler }
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                required
                  autoComplete="avatar"
                  name="avatar"
                  fullWidth
                  id="avatar"
                  label="Avatar"
                  onChange ={(e:any)=>handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                  value={regUser.username}

                  onChange={(e: any)=>handleChange(e)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={regUser.email}

                  onChange={(e:any)=>handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={regUser.password}
                  onChange ={(e:any)=>handleChange(e)}

                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login">Already have an account? Log in</Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
       
       
      </Container>
    </ThemeProvider>
  );
}
