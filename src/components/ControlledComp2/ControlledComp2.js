import React from "react";


export default class ControlledComp2 extends React.Component {

    state = {
        input1: '',
        input2: '',
    }

    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let firstOutput = document.querySelector(".firstOutput");
        firstOutput.textContent = 'number * 0.5: ' + 0.5*(this.state.input1);

        let secondOutput2 = document.querySelector(".secondOutput2");
        secondOutput2.textContent = 'number * 0.05: ' + 0.05*(this.state.input1);
    }

    render() 
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                <input type='number' 
                name="input1" 
                value={this.state.input1}
                onChange={this.handleInput}/>

                <input type='number' 
                name="input2" 
                value={this.state.input2}
                onChange={this.handleInput}/>

                <button>Click me!</button>

                <div className="firstOutput"></div>
                <div className="secondOutput2"></div>
                </form>
                

            </div>
        )
    }
}
