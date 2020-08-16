import React,{Component} from 'react';
import axios from '../../axios-order'
import './styles.css'

class Orders extends Component {

    state={
        orders:null,
        buyers:null
    }

    componentDidMount (){
        axios.get('/orders')
            .then(value =>  this.setState({orders:value.data}))
        axios.get('/buyers')
            .then(value =>  this.setState({buyers:value.data}))
    }

    render(){
        return (
            <div className="card">
                <div>Buyer: {}</div>
                <div>Email: {}</div>
                <div>Burger ingredients: {}</div>
                <div>Total price: R${}</div>
            </div>
        );
    }
}

export default Orders;