import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import instance from '../../service/AxiosOrder';

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({ car, open, handleClose }) {

    const[carId,setCarId] = useState(car?.carId);
    const [carModel, setCarModel] = useState(car?.carModel);
    const [carBrand, serCarBrand] = useState(car?.carBrand);
    const [carTransMode, setCarTransMode] = useState(car?.carTransMode);
    const [carFuelType, setCarFuelType] = useState(car?.carFuelType);
    const [carEngineCap, setCarEngineCap] = useState(car?.carEngineCap);
    const [carImage, setCarImage] = useState(car?.carCarName);



    const [img, setImg] = useState();
    const changeImage = (val) => {
        console.log(val.target.files[0])
        setImg(URL.createObjectURL(val.target.files[0]))
        setCarImage(val.target.files[0])
    }

    const updateCar = (car) => {

        instance.put(`/car/${car.carId}`,{
            model:carModel,
            brand:carBrand,
            transMode:carTransMode,
            fuelType:carFuelType,
            engineCap:carEngineCap
        })
        .then(function(response){
            const imgId=response.data.images[0].imagesId;
            const data = new FormData();
            data.append('imageName',carImage)
            data.append('carId',carId)

            instance.put(`/images/updateImages/${imgId}`,data, {

                headers: {
                'content-type': 'multipart/form-data'
            }



        })
        .then(function (response) {
            console.log(response)
            // handleClose();

        })
        .catch(function (error) {
            console.log(error);
        });

    })

    //     const data = new FormData();

    //     data.append('model',carModel)
    //     data.append('brand',carBrand)
    //     data.append('transMode',carTransMode)
    //     data.append('fuelType',carFuelType)
    //     data.append('engineCap',carEngineCap)
    //     data.append('carName',carName)

        

    //     instance.put(`/car/${car.carId}`,data, {

    //         headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // })
            .then(function (response) {
                console.log(response.data.images[0].imagesId)
                handleClose();

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Update The Car Details....."}</DialogTitle>
                <DialogContent>
                    <TextField value={carModel} sx={{ margin: 1 }} id="outlined-basic" label="Model" variant="outlined" onChange={(val) => setCarModel(val.target.value)} />
                    <TextField value={carBrand} sx={{ margin: 1 }} id="outlined-basic" label="Brand" variant="outlined" onChange={(val) => serCarBrand(val.target.value)} />
                    <TextField value={carTransMode} sx={{ margin: 1 }} id="outlined-basic" label="Tranmission Mode" variant="outlined" onChange={(val) => setCarTransMode(val.target.value)} />
                    <TextField value={carFuelType} sx={{ margin: 1 }} id="outlined-basic" label="Fuel Type" variant="outlined" onChange={(val) => setCarFuelType(val.target.value)} />
                    <TextField value={carEngineCap} sx={{ margin: 1 }} id="outlined-basic" label="Engine Capacity" variant="outlined" onChange={(val) => setCarEngineCap(val.target.value)} />


                    <Button
                        sx={{ margin: 1 }}
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

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => updateCar(car)} sx={{ backgroundColor: 'green', color: 'white' }}>Update</Button>
                    <Button onClick={handleClose} sx={{ backgroundColor: 'red', color: 'white' }}>Close</Button>
                </DialogActions>

            </Dialog>
        </React.Fragment>
    )
}