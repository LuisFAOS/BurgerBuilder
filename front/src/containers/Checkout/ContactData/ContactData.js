import React, {useState} from 'react';
import './styles.css';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
import {withRouter} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import schema from '../../../yupSchemas/schemaContact'
import { connect } from 'react-redux'

function ContactData(props) {

    const [loading,setLoading]=useState(false)


    const onSubmit = async (values)=>{
        setLoading(true)
        const orders= {
            total_price: props.totalPrice,
            date_creation: new Date(),
        }
        const buyer = values

        await axios.post('/orders',orders)
        await axios.post('/ingredients',props.ingredients)
        await axios.post('/buyers',buyer)
        props.onResetIngredients()
        props.history.push('/') 
    }
    
        return(loading ? <Spinner/>:
            <Formik
                validationSchema={schema}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{name:'',email:'',street:'',postalcode:''}}>

                {({v, errors,t, isValid})=>(
                    <Form className="contentForm">
                        <h2>Enter with yours data</h2>
                                <Field className="itemData" name='name' placeholder='Name'/>
                                <p className="error">{errors.name}</p>

                                <Field className="itemData" name='email' placeholder='Email'/>
                                <p className="error"><ErrorMessage name='email'/></p>
                                
                                <Field className="itemData" name='street' placeholder='Street'/>
                                <p className="error"><ErrorMessage name='street'/></p>
                                
                                <Field className="itemData" name='postalcode' placeholder='Postal code'/>
                                <p className="error"><ErrorMessage name='postalcode'/></p>
                        <Button btnType="Success" disabled={!isValid}>ORDER</Button>
                    </Form>)}
            </Formik>)
}

const mapStateToProps = state => {
    return {
      ingredients:state.ingredientsReducer.ingredients,
      totalPrice: state.ingredientsReducer.totalPrice
    }
}

const mapDispatchToProps = dispacth => {
    return {
      onResetIngredients: () => dispacth({type: 'RESET_INGREDIENTS'})
    }
}  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));