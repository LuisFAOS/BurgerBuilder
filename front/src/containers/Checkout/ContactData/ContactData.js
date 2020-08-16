import React, {useState} from 'react';
import './styles.css';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
import {withRouter} from 'react-router-dom'

function ContactData(props) {

    const [loading,setLoading]=useState(false)

    const [userData, setUserData] = useState({
        name:'',
        email:'',
        street:'',
        cep:''
    })

    const setDatas = (value,position) => {
        const datas={...userData}
        datas[position]=value
        setUserData({
            name:datas.name,
            email:datas.email,
            street:datas.street,
            cep:datas.cep
        })
    }

    const concluidPurchase = async() => {
        if(!(localStorage.getItem('ingredients') && localStorage.getItem('totalPrice'))){
            props.history.push('/')
        }
        setLoading(true)
        const orders= {
            total_price: localStorage.getItem('totalPrice'),
            date_creation: new Date(),
        }
        const ingredients = {ingredients:localStorage.getItem('ingredients')}
        const buyer = userData

        await axios.post('/orders',orders)
        await axios.post('/ingredients',ingredients)
        await axios.post('/buyers',buyer)
        localStorage.removeItem('ingredients')
        localStorage.removeItem('totalPrice')
        props.history.push('/')
    }

    return (
        <div className="contentForm">
            <h2>Enter with yours data</h2>
            {loading ? <Spinner/>:(
                <>
                    <input className="itemData" name='name' placeholder='Name' 
                        onBlur={(e) => setDatas(e.target.value, 'name')}
                    required/>
                    <input className="itemData" name='email' type='email' placeholder='Email'
                        onBlur={(e) => setDatas(e.target.value, 'email')}
                    required/>
                    <input className="itemData" name='street' placeholder='Street'
                        onBlur={(e) => setDatas(e.target.value, 'street')}
                    />
                    <input className="itemData" name='postalcode' placeholder='CEP/Postal Code'
                        onBlur={(e) => setDatas(e.target.value, 'cep')}
                    />
                </>)}
            <Button btnType="Success" clicked={concluidPurchase}>ORDER</Button>
        </div>
    );
}

export default withRouter(ContactData);