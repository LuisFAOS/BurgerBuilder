import React,{useState, useEffect} from 'react';
import axios from '../../axios-order'
import './styles.css'

function Orders() {

    const [orders,setOrders]=useState(null)
    const [buyers,setBuyers]=useState(null)

    useEffect(()=>{
        axios.get('/buyers')
            .then(value =>  setBuyers(value.data))
        axios.get('/orders')
            .then(value =>  setOrders(value.data))
    },[])

    const renderIngredients = (ingredients)=>{
        return ingredients.map(ingre => {
            return Object.entries(ingre).map(value=> {
                return (<span className="ingredient" 
                        key={value[0]}>  {value[0]}({value[1]})  </span>)
            })
        })
    }

        return ( buyers && orders ?
            orders.map((value, i) => <div className="card" key={i}>
                                        <div className="item">Buyer name: {buyers[i].name}</div>
                                        <div className="item">Email: {buyers[i].name}</div>
                                        <div className="item ingredients">Burger ingredients:                                       
                                            {()=> <div>{renderIngredients(value.ingredients)}</div>}
                                        </div>
                                        <div className="item">Total price: R${value.total_price}</div>
                                        <div className="item">Date creation: {new Date(value.date_creation).toLocaleString()}</div>
                                    </div>
            ):<strong>NÃO HÁ NENHUMA ENCOMENDA AQUI!</strong>
        )
}
export default Orders;