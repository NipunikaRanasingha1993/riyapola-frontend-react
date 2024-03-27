import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import instance from '../../service/AxiosOrder';
import Swal from 'sweetalert2';


export default function Customer() {

    useEffect(()=>{
        getAllCustomers()
    },[]);

    const [data , setData] = useState([]);

    const columns = [
        { field: 'id', headerName: 'Customer ID', width: 150 },
        { field: 'cusName', headerName: 'Customer Name', width: 200},
        { field: 'cusContact', headerName: 'Customer Contact', width: 200},
        { field: 'cusEmail', headerName: 'Customer Email', width: 200},
        { field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (act) =>(
              <Box sx={{ '& button': { m: 1 } }}>
                <Button  onClick={()=>deleteCustomer(act.row.id)}  variant="contained" size="small" color='error'>
              Delete
            </Button>
            </Box>
            )},
    ];
    
    const getAllCustomers = () => {
        instance({
            method: 'get',
            url: '/customer/getAllCustomer',
        })

            .then((response) => {
                console.log(response);
                const array = [];
                response.data.forEach((val) => {
                    array.push({
                        id: val.id,
                        cusName: val.name,
                        cusContact: val.contact,
                        cusEmail: val.email,
                    });
                });
                setData(array);
            })
            .catch((error) => {
                console.error('Error fetching customers:', error);
            });
        }

        const deleteCustomer = (id) =>{
            instance({
                method: 'delete',
                url: '/customer/' + id,
            })
                .then(function (response) {
                    console.log(response);
                    // alert('delete successful.....')
                    Swal.fire({
                        icon: "success",
                        title: "Deleted....",
                        text: "Customer Delete Successfully....",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                    getAllCustomers(setData);
                })
                .catch(function (error) {
                    console.log(error);
                    // alert('please try again....!')
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                });
        }

    

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                // disableRowSelectionOnClick
            />
        </Box>
    )
}