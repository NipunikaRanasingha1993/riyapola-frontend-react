import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import instance from '../../service/AxiosOrder';
import { useState } from 'react';
import { useEffect } from 'react';
import DialogBox from '../DialogBox/DialogBox';
import { ImagesearchRoller } from '@mui/icons-material';


export default function CarAction() {

    useEffect(() => {
        getAllCars()
    }, []);

    const [data, setData] = useState([]);

    const [openAlert, setOpenAlert] = useState(false);
    const [selectedCar, setSelectedCar] = useState();

    const clickUpdate = (car) => {
        setSelectedCar(car);
        setOpenAlert(true);

    }

    // const close = () => {
    //     setOpen(false);
    // }

    const deleteCar = (carId) => {
        instance({
            method: 'delete',
            url: '/car/' + carId,
        })
            .then(function (response) {
                console.log(response);
                alert('delete successful.....')
                getAllCars(setData);
            })
            .catch(function (error) {
                console.log(error);
                alert('please try again....!')
            });
        }

    const getAllCars = () => {
        instance({
            method: 'get',
            url: '/car/getAllCar',
        })

            .then((response) => {
                console.log(response);
                const array = [];
                response.data.forEach((val) => {
                    array.push({
                        carId: val.carId,
                        carModel: val.model,
                        carBrand: val.brand,
                        carTransMode: val.transMode,
                        carFuelType: val.fuelType,
                        carEngineCap: val.engineCap,
                        carCarName: val.images[0].imageName,
                    });
                });
                setData(array);
            })
            .catch((error) => {
                console.error('Error fetching cars:', error);
            });


    }

    return (
        <div>
            {data.map((car) => (

                <div key={car.carId} > {/* Use carId as a unique key */}

                    <Card sx={{ maxWidth: 345, margin: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={`http://localhost:8080/${car.carCarName}`}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {car.carBrand} {car.carModel}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Transmission : {car.carTransMode} | Engine : {car.carEngineCap} | Fuel Type : {car.carFuelType}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => deleteCar(car.carId)} sx={{ bgcolor: 'red', color: 'white' }} size="small">Delete</Button>
                            <Button onClick={() => clickUpdate(car)} sx={{ bgcolor: 'green', color: 'white' }} size="small">Update</Button>
                        </CardActions>
                    </Card>
                </div>

            ))}

            {openAlert &&
                <DialogBox
                    handleClose={() => { setOpenAlert(false) }}
                    open={openAlert}
                    car={selectedCar}
                />
            }
        </div>
    )
}