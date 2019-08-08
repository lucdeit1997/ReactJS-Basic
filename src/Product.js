import React from 'react';

export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        let { name, price } = this.props;
        return (
            <h1>
                name = <strong>{name}</strong> || price = <strong>{price}</strong>
            </h1>
        )
    }
}
