import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SimpleForm: FC = () => {
    return (
        <div>
            <Card sx={{ width: 1000 }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Email
                    </Typography>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Email
                    </Typography>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div>
                    <Button variant="contained">Login</Button>
                </div>
            </Card>
        </div>
    )
}

export default SimpleForm