import {Card, Stack, TextField } from '@mui/material'
import './ActionPage.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function ActionPage(){

    const [carModel,setCarModel] = useState("");
    const [carBrand,setCarBrand] = useState("");
    const [carTransMode,setCarTransMode] = useState("");
    const [carFuelType,setCarFuelType] = useState("");
    const [carEngineCap,setCarEngineCap] = useState("");

    const saveCar = () =>{
        const data = new FormData();

        data.append('model',carModel)
        data.append('brand',carBrand)
        data.append('transMode',carTransMode)
        data.append('fuelType',carFuelType)
        data.append('engineCap',carEngineCap)
        
    }

    
    return(
        <div>
            <section className="action">
                    <Card className='card1'>
                        <h3>Car Registration...</h3>

                        <TextField 
                        sx={{marginBottom:2,width:375}}
                        id="outlined-basic" 
                        label="Model" 
                        variant="outlined" 
                        onChange={(val)=>setCarModel(val.target.value)}/>

                        <TextField 
                        sx={{marginBottom:2,width:375}} 
                        id="outlined-basic" 
                        label="Brand" 
                        variant="outlined" 
                        onChange={(val)=>setCarBrand(val.target.value)}/>

                        <TextField 
                        sx={{marginBottom:2,width:375}} 
                        id="outlined-basic" 
                        label="Transmition Mode" 
                        variant="outlined" 
                        onChange={(val)=>setCarTransMode(val.target.value)}/>

                        <TextField 
                        sx={{marginBottom:2,width:375}} 
                        id="outlined-basic" 
                        label="Fuel Type" 
                        variant="outlined" 
                        onChange={(val)=>setCarFuelType(val.target.value)}/>

                        <TextField 
                        sx={{marginBottom:2,width:375}} 
                        id="outlined-basic" 
                        label="Engine Capacity" 
                        variant="outlined" 
                        onChange={(val)=>setCarEngineCap(val.target.value)}/>
                        
                        <Button
                        sx={{marginBottom:2}}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        >
                            Upload a Car Image
                            <VisuallyHiddenInput type="file" />
                            </Button>

                            <Stack direction="row" spacing={20}>
                                <Button variant="contained" color="success">Save car</Button>
                                <Button variant="outlined" color="error">Clear</Button>
                                </Stack>
                                
                </Card>

            </section>
        </div>
    );
}