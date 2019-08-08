import React from 'react';
export default class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dateNow: new Date()
        }
    }

    componentDidMount(){
        this.timeTick = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        console.log("WILL-UN-MOUNT");
        clearInterval(this.timeTick);
    }

    tick(){
        this.setState({
            dateNow: new Date()
        })
    }

    render(){
        return(
        <div> 
            <h1>My Clock</h1>  <h2>It is { this.state.dateNow.toLocaleTimeString() }</h2> 
        </div>
        )
    }
}