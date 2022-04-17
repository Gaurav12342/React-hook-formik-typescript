import React, { FC } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../views/Login/style.scss'
import { EMAIL, PASSWORD, VALID_EMAIL } from '../../constants/index'


export interface IInitialValue {
    email: string,
    password: string
};

export interface IFormikDestructuring {
    values?: IInitialValue,
    handleSubmit: any,
    handleChange?: any,
    errors: any,
    touched: any,
    handleBlur?: any,
    getFieldProps: any
};
const SimpleForm: FC = () => {

    const initialValue: IInitialValue = {
        email: '',
        password: '',
    }

    const errorMessage = {
        email: EMAIL,
        password: PASSWORD,
    };

    const validationSchemas = Yup.object({
        email: Yup.string().email(VALID_EMAIL).max(255).required(errorMessage.email),
        password: Yup.string().required(errorMessage.password),
    })

    const formSubmit = (values: IInitialValue) => {
        console.log("values", values);
    }

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: validationSchemas,
        onSubmit: formSubmit,
    });

    const { values, handleSubmit, handleChange, errors, touched, handleBlur, getFieldProps }: IFormikDestructuring = formik;
    return (
        <div className="container">
            <h1>Sign in to continue</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <TextField
                        id="email"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.email}
                        name='email'
                        label="Email"
                        variant="standard"
                        {...getFieldProps('email')}
                    />
                    <Typography className="error" variant="caption" display="block" gutterBottom>
                        {errors.email && touched.email ? errors.email : null}
                    </Typography>
                </div>

                <div className="form-row">
                    <TextField
                        id="password"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.password}
                        name='password'
                        label="Password"
                        variant="standard"
                        type="password"
                        {...getFieldProps('password')}
                    />
                    <Typography className="error" variant="caption" display="block" gutterBottom>
                        {errors.password && touched.password ? errors.password : null}
                    </Typography>
                </div>
                <Button type="submit" variant="contained">Login</Button>
            </form>
        </div >
    )
}

export default SimpleForm