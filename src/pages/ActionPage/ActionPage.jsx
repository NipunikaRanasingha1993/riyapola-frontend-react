import { Button, Card, TextField } from '@mui/material'
import './ActionPage.css'

export default function ActionPage(){
    return(
        <div>
            <section className="action">
                    <Card className='card1'>
                        <h3>Car Registration...</h3>
                        <TextField sx={{marginBottom:2,width:375}} id="outlined-basic" label="Model" variant="outlined" />
                        <TextField sx={{marginBottom:2,width:375}} id="outlined-basic" label="Brand" variant="outlined" />
                        <TextField sx={{marginBottom:2,width:375}} id="outlined-basic" label="Transmition Mode" variant="outlined" />
                        <TextField sx={{marginBottom:2,width:375}} id="outlined-basic" label="Fuel Type" variant="outlined" />
                        <TextField sx={{marginBottom:2,width:375}} id="outlined-basic" label="Engine Capacity" variant="outlined" />
                        <Button sx={{bgcolor:'purple',width:85,color:'white',borderRadius:2}}>Register</Button>
                    </Card>

            </section>
        </div>
    )
}