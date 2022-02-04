import React from "react";

export default class ControlledComp extends React.Component {
    
    state = {
        input1: '',
        input2: '',
        input3: '',
    };

    constructor(props)
    {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        let output1 = document.querySelector(".output1");
        output1.textContent = JSON.stringify('Text1: ' + this.state.input1);

        let output2 = document.querySelector(".output2");
        output2.textContent = JSON.stringify('Text2: ' + this.state.input2);

        let output3 = document.querySelector(".output3");
        output3.textContent = JSON.stringify('Text3: ' + this.state.input3);
    }

    render() {

        return (
            <div>
                
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' 
                    name="input1"
                    value={this.state.input1}
                    onChange={ this.handleOnChange}/>

                    <input type='text' 
                    name="input2"
                    value={this.state.value}
                    onChange={ this.handleOnChange}/>

                    <input type='text' 
                    name="input3"
                    value={this.state.value}
                    onChange={ this.handleOnChange}/>

                    <button>Click me to get value</button>

                    <div className="output1"></div>

                    <div className="output2"></div>

                    <div className="output3"></div>
    
                </form>
                
            </div>
        )
    }
}

