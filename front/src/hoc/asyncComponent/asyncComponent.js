import React, {Component} from 'react'

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }
        
        componentDidMount () {
            importComponent()
                .then()
        }
    }
}