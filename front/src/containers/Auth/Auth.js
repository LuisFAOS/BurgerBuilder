import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import schema from '../../yupSchemas/schemaLogin'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

import Button from '../../components/UI/Button/Button'
// import { Container } from './styles';

function Auth(props) {

    const [isSignup, setIsSignup]= useState(true)

    const switchAuthHandler = () => {
        setIsSignup(isSignup ? false : true)
    }

  return (
      <>
        <Formik
                validationSchema={schema}
                onSubmit={values => props.onAuth(values.email, values.password, isSignup)}
                validateOnMount
                initialValues={{email:'',password:''}}>

                {({values, e,t, isValid})=>(
                    <Form className="contentForm">
                                <h2>LOGIN</h2>

                                <Field className="itemData" name='email' placeholder='Email'/>
                                <p className="error"><ErrorMessage name='email'/></p>   

                                <Field className="itemData" type='password' name='password' placeholder='Password'/>
                                <p className="error"><ErrorMessage name='password'/></p>

                        <Button btnType="Success" disabled={!isValid}>SIGNIN</Button>
                    </Form>)}
            </Formik>
      </>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null,mapDispatchToProps)(Auth);