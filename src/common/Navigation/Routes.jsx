import AddCar from "../../pages/AddCar/AddCar.jsx";
import CarAction from "../../pages/CarAction/CarAction.jsx";
import Customer from "../../pages/Customer/Customer.jsx";
import DialogBox from "../../pages/DialogBox/DialogBox.jsx";
import Reservation from "../../pages/Reservation/Reservation.jsx";


const routes = [
    {
        name : "Reservation",
        key : "reservation",
        path : "/reservation",
        component : <Reservation/>
    },

    {
        name : "CarAction",
        key : "carAction",
        path : "/carAction",
        component : <CarAction/>

    },

    {
        name : "Customer",
        key : "customer",
        path : "/customer",
        component : <Customer/>
    },

    {
        name : "AddCar",
        key : "addCar",
        path : "/addCar",
        component : <AddCar/>
    },

    // {
    //     name : "DialogBox",
    //     key : "dialogBox",
    //     path : "/dialogBox",
    //     component : <DialogBox/>
        
    // }
]

export default routes;