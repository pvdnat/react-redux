import React, {Component, PureComponent} from "react";

export default class HomeComponent extends PureComponent {


    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }

    }

    componentDidMount() {
        console.log('ComponentDidMount');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate');
        if (prevState.count !== this.state.count) {
            console.log('State changed. Rendering...');
        }
    } 
    
    componentWillUnmount() {
        console.log('ComponentWillUnmount');
    }
    
    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };
    
    render() {
        console.log('Render');
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}