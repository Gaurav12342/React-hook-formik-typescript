import React, { FC } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export interface IInitialValue {
    email: string,
    password: string
};

const SimpleForm: FC = () => {

    const initialValue: IInitialValue = {
        email: '',
        password: '',
    }

    const validationSchemas = Yup.object({
        email: Yup.string().required('Please enter the email address'),
        password: Yup.string().required('Please enter the password'),
    })

    const formSubmit = (values: IInitialValue) => {
        console.log("values", values);
    }

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: validationSchemas,
        onSubmit: formSubmit,
    });

    const { values, handleSubmit, handleChange, errors, touched, handleBlur }: any = formik;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Card sx={{ width: 1000 }}>
                    <div style={{ margin: "20px", height: "200px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Email
                            </Typography>
                            <TextField
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                name='email'
                                label="Email"
                                variant="standard"
                            />
                            <Typography variant="caption" display="block" gutterBottom>
                                {errors.email && touched.email ? "Please enter the email address..!" : null}
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Password
                            </Typography>
                            <TextField
                                id="passowrd"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                name='password'
                                label="Password"
                                variant="standard"
                                type="password"
                            />
                            <Typography variant="caption" display="block" gutterBottom>
                                {errors.password && touched.passowrd ? "Please enter the password..!" : null}
                            </Typography>
                        </div>
                        <div>
                            <Button type="submit" variant="contained">Login</Button>
                        </div>
                    </div>
                </Card>
            </form>
        </div >
    )
}

export default SimpleForm