import React from "react";
import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import FormError from "../../components/formError/Error";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {clearCart} from "../../redux/actions"
import './checkout.css'

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <FormError touched={meta.touched} error={meta.error} />
        </>
    )
}

const goBack = () => {
    window.history.back();
};

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <section className="checkout">
            <div className="checkout__items">
            <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            email: '',
                            phone: '',
                            address: '',
                        }}
                        validationSchema={Yup.object({
                            first_name: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),

                            last_name: Yup.string()
                                .min(3, 'Must be at least 3 characters')
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),

                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),

                            phone: Yup.string()
                                .matches(/^\+\d{12}$/, 'Invalid phone number')
                                .required('Required'),

                            address: Yup.string()
                                .matches(/^[a-zA-Z0-9, ]+$/, 'Invalid address')
                                .required('Required'), 
                        })}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                resetForm();
                                setSubmitting(false);
                                
                                dispatch(clearCart());

                                navigate('/success');
                            }, 1000)
                        }}
                    >
                        {props => (
                            <Form>
                                <div className='checkout__form'>
                                    <h1 className='checkout__title'>Checkout</h1>
                                    <div className="form_input">
                                    <CustomTextInput label='First Name' name='first_name' type='text' placeholder='Name' />
                                    <CustomTextInput label='Last Name' name='last_name' type='text' placeholder='Surname' />
                                    <CustomTextInput label='Email' name='email' type='text' placeholder='xyz@some.com' />
                                    <CustomTextInput label='Phone number' name='phone' type='text' placeholder='+380123456789' />
                                    <CustomTextInput label='Address' name='address' type='text' placeholder='Street, building(apartments)' />
                                    </div>
                                </div>

                                <div className='checkout__buttons'>
                                    <button className='button__goback1' onClick={goBack}>
                                        Go back
                                    </button>
                                    <button className='button__submit' type='submit' >
                                        {props.isSubmitting ? 'Loading...' : 'Submit'}
                                    </button>
                                </div>

                            </Form>
                        )}
                    </Formik>
            </div>
        </section>
    );
};

export default Checkout;
