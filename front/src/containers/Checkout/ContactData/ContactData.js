import React, {useState} from 'react';
import './styles.css';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'

function ContactData() {

    const [userData, setUserData] = useState({
        name:'',
        email:'',
        street:'',
        cep:'',
        loading:false
    })

    const setDatas = (value,position) => {
        const datas={...userData}
        datas[position]=value
        setUserData({
            name:datas.name,
            email:datas.email,
            street:datas.street,
            cep:datas.cep,
            loading:false
        })
    }

    const concluidPurchase = () => {
        const orders= {
            total_price: JSON.stringify(localStorage.getItem('totalPrice')),
            date_creation: new Date(),
            ingredients: JSON.stringify(localStorage.getItem('ingredients')),
            userData
        }
        
        axios.post('/orders',orders)
    }

    return (
        <div className="contentForm">
            <h2>Enter with yours data</h2>
            <input className="itemData" name='name' placeholder='Name' 
                onBlur={(e) => setDatas(e.target.value, 'name')}
            />
            <input className="itemData" name='email' type='email' placeholder='Email'
                onBlur={(e) => setDatas(e.target.value, 'email')}
            />
            <input className="itemData" name='street' placeholder='Street'
                onBlur={(e) => setDatas(e.target.value, 'street')}
            />
            <input className="itemData" name='postalcode' placeholder='CEP/Postal Code'
                onBlur={(e) => setDatas(e.target.value, 'cep')}
            />
            <Button btnType="Success" clicked={concluidPurchase}>ORDER</Button>
        </div>
    );
}

export default ContactData;