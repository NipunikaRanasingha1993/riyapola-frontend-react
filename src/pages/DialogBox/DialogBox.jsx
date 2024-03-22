import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

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

export default function DialogBox({car,open,handleClose}) {

    const [carModel,setCarModel] = useState(car?.carModel);
    const [carBrand,serCarBrand] = useState(car?.carBrand);
    const [carTransMode,setCarTransMode] = useState(car?.carTranseMode);
    const [carFuelType,setCarFuelType] = useState(car?.carFuelType);
    const [carEngineCap,setCarEngineCap] = useState(car?.carEngineCap);
    const [carName,setCarName] = useState(car?.carName);
    // const changeImage2 = (val) => {
        
    //     setImg(URL.createObjectURL(val.target.files[0]))
    //     setCarName(val.target.files[0])
    // }


    const [img, setImg] = useState();
    const changeImage = (val) => {
        console.log(val.target.files[0])
        setImg(URL.createObjectURL(val.target.files[0]))
        setCarName(val.target.files[0])
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
                    <TextField value={carModel} sx={{margin:1}} id="outlined-basic" label="Model" variant="outlined" onChange={(val)=>setCarModel(val.target.value)}/>
                    <TextField value={carBrand} sx={{margin:1}} id="outlined-basic" label="Brand" variant="outlined" onChange={(val)=>serCarBrand(val.target.value)}/>
                    <TextField value={carTransMode} sx={{margin:1}} id="outlined-basic" label="Tranmission Mode" variant="outlined" onChange={(val)=>setCarTransMode(val.target.value)}/>
                    <TextField value={carFuelType} sx={{margin:1}} id="outlined-basic" label="Fuel Type" variant="outlined" onChange={(val)=>setCarFuelType(val.target.value)}/>
                    <TextField value={carEngineCap} sx={{margin:1}} id="outlined-basic" label="Engine Capacity" variant="outlined" onChange={(val)=>setCarEngineCap(val.target.value)}/>

                    <Button value={carName} sx={{backgroundColor:'red',color:'white'}}>Load</Button>
                    
                    <Button
                        sx={{marginBottom:2,width:350}}
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
                            {/* <img src={carName} width={"40%"} height={"60%"} alt="hi"/> */}

                            <img src={img} width={"40%"} height={"60%"} alt=""/>
               
                    </DialogContent>
                    <Button onClick={handleClose} sx={{backgroundColor:'green',color:'white'}}>Update</Button>
                    <Button onClick={handleClose} sx={{backgroundColor:'red',color:'white'}}>Close</Button>
               
            </Dialog>
        </React.Fragment>
    )
}