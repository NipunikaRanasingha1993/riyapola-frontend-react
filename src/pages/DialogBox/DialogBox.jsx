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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox({data,open,handleClose}) {

    const [carModel,setCarModel] = useState(data?.carModel);
    const [carBrand,serCarBrand] = useState(data?.carBrand);
    const [carTransMode,setCarTransMode] = useState(data?.carTranseMode);
    const [carFuelType,setCarFuelType] = useState(data?.carFuelType);
    const [carEngineCap,setCarEngineCap] = useState(data?.carEngineCap);



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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{backgroundColor:'green',color:'white'}}>Update</Button>
                    <Button onClick={handleClose} sx={{backgroundColor:'red',color:'white'}}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}