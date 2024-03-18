import { Button, Card } from "@mui/material";
import './HomePage.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../service/AxiosOrder.jsx";

export default function LoginPage(){
    
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const Login = () =>{

        instance.post('/admin/login', {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response.data.token);
            localStorage.setItem('admToken' , response.data.token);
            window.location.reload();
            
          })
          .catch(function (error) {
            console.log(error);
          });

    }
 return(
        <div className="main">
            {/* <section className="main"> */}

            <div className='content'>
        <h1>Riyapola Car..</h1>
        <p>
          "Get ready to go your jurney with different kind of Vehicals..""
        </p>
        
      </div>
            
                <Card className="card">
                    <h3>Admin Login</h3>
                        <TextField sx={{marginBottom:3,width:375}} id="outlined-basic" label="Enter Email" variant="outlined" onChange={(val)=>{setEmail(val.target.value)}}/>
                        <TextField sx={{marginBottom:3,width:375}} id="outlined-basic" label="Enter Pasword" variant="outlined" onChange={(val)=>{setPassword(val.target.value)}}/>
                        <Button onClick={()=>Login()} sx={{bgcolor:'purple',color:'white',borderRadius:2,width:85}}>Login</Button>

                        </Card>
                        {/* </section> */}

                       
                        </div>
                         )
                        }