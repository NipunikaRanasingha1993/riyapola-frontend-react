import { TextField } from '@mui/material'
import './AddCar.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import instance from '../../service/AxiosOrder.jsx';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';

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

export default function AddCar() {

    const [carModel, setCarModel] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [carTransMode, setCarTransMode] = useState("");
    const [carFuelType, setCarFuelType] = useState("");
    const [carEngineCap, setCarEngineCap] = useState("");
    const [carImage, setCarImage] = useState("");


    const saveCar = () => {

        instance.post('/car/addNewCar',{
            model:carModel,
            brand:carBrand,
            transMode:carTransMode,
            fuelType:carFuelType,
            engineCap:carEngineCap

        })
        .then(function(response){
            console.log(response.data.carId);
            const carId=response.data.carId;
            const data = new FormData();
            data.append('imageName',carImage)
            data.append('carId',carId)

            instance.post("/images/addNewImages", data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(function (response) {
                    console.log(response);
    
                })
                .catch(function (error) {
                    console.log(error);
                })

            })
        .catch(function(error){
            Swal.fire("Something wrong.Please try again....!");
        })
        

    }

    const clearData = () => {
        setCarModel("");
        setCarBrand("");
        setCarTransMode("");
        setCarFuelType("");
        setCarEngineCap("");
        setCarImage("");
        

        const form = document.querySelector('form');
        if (form) {
            form.reset();
        }







        console.log("Your data were cleared.....");
    }

    const [img, setImage] = useState();
    const changeImage = (val) => {
        console.log(val.target.files[0])
        setImage(URL.createObjectURL(val.target.files[0]))
        setCarImage(val.target.files[0])
    }


    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '50ch' }, display: 'flex', justifyContent: 'center', alignItems: 'center',
                    flexDirection: 'column'

                }}
                noValidate
                autoComplete="off">

                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="h4" gutterBottom>
                    CAR REGISTRATION
                </Typography>

                <TextField
                    sx={{ marginBottom: 2, width: 300 }}
                    id="outlined-basic"
                    label="Model"
                    variant="outlined"
                    onChange={(val) => setCarModel(val.target.value)} />

                <TextField
                    sx={{ marginBottom: 2, width: 300 }}
                    id="outlined-basic"
                    label="Brand"
                    variant="outlined"
                    onChange={(val) => setCarBrand(val.target.value)} />

                <TextField
                    sx={{ marginBottom: 2, width: 300 }}
                    id="outlined-basic"
                    label="Transmition Mode"
                    variant="outlined"
                    onChange={(val) => setCarTransMode(val.target.value)} />

                <TextField
                    sx={{ marginBottom: 2, width: 300 }}
                    id="outlined-basic"
                    label="Fuel Type"
                    variant="outlined"
                    onChange={(val) => setCarFuelType(val.target.value)} />

                <TextField
                    sx={{ marginBottom: 2, width: 200 }}
                    id="outlined-basic"
                    label="Engine Capacity"
                    variant="outlined"
                    onChange={(val) => setCarEngineCap(val.target.value)} />



                <Button
                    sx={{ marginBottom: 2 }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    onChange={changeImage}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload a Car Image
                    <VisuallyHiddenInput type="file" />
                </Button>

                <img src={img} width={"40%"} height={"60%"} alt="" />


                <Button sx={{ bgcolor: 'green', color: 'white' }} onClick={() => saveCar()} variant="contained" color="success">Save car</Button>
                <Button sx={{ bgcolor: 'red', color: 'white' }} onClick={() => clearData()} variant="outlined" color="error">Clear</Button>





            </Box>

        </div>
    );
}