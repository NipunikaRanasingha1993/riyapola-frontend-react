import { Button, Card } from "@mui/material";
import './HomePage.css'
import * as React from 'react';
import { useState } from "react";
import instance from "../../service/AxiosOrder.jsx";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export default function LoginPage() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {

    instance.post('/admin/login', {
      email: email,
      password: password
    })
      .then(function (response) {
        console.log(response.data.token);
        localStorage.setItem('admToken', response.data.token);
        window.location.reload();

      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div className="main">

      <div className='content'>
        <h1>Riyapola Car..</h1>
        <p>
          "Get ready to go your jurney with different kind of Vehicals..""
        </p>

      </div>

      <Card className="card">
        <h3>Admin Login</h3>
        <TextField sx={{ marginBottom: 3, width: 375 }} id="outlined-basic" label="Enter Email" variant="outlined" onChange={(val) => { setEmail(val.target.value) }} />
        {/* <TextField sx={{marginBottom:3,width:375}} id="outlined-basic" label="Enter Pasword" variant="outlined" onChange={(val)=>{setPassword(val.target.value)}}/> */}

        <FormControl sx={{ justifyContent: 'center', alignItems: 'center', marginBottom: 3, width: 375 }} variant="outlined">
          {/* m: 1, width: '25ch', */}
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ width: 375, }}
            label="Password"
            onChange={(val) => setPassword(val.target.value)}
          />
        </FormControl>

        <Button onClick={() => Login()} sx={{ bgcolor: 'purple', color: 'white', borderRadius: 2, width: 85 }}>Login</Button>

      </Card>


    </div>
  )
}