import React, { Component } from 'react';
import Modal from '../components/UI/Modal/modal'
import './styles.css';

const withErrorHandler= (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }
        componentDidMount () {
            this.reqInterceptor= axios.interceptors.request.use(null, req => {
                this.setState({error: null})
                return req
            })
            this.resInterceptors= axios.interceptors.response.use(res => res ,error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount () {
            console.log('[WillUnmout]')
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render(){
            return (
                <>
                    <Modal show={this.state.error}
                           clicked={this.errorConfirmedHandler}>
                        {this.state.error ? "Desculpe! Ocorreu um erro: "+this.state.error.message:""}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );}
    }
}

export default withErrorHandler;