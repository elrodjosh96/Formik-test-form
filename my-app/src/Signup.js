import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import './Signup.css'

export default function Signup() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, '15 or less').required('Required'),
            lastName: Yup.string().max(15, '15 or less').required('Required'),
            email: Yup.string().email('Invalid email').required('Required')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    console.log(formik.values);
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='input-container'>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
            </div>
            <div className='input-container'>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName} />
                    {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
            </div>
            <div className='input-container'>
                <input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}