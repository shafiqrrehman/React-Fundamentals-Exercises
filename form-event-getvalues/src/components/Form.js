import React, {Component} from 'react';
import Shown from './Shown.js';

export default class Form extends Component {

    constructor(){
        super();
        this.state = {name: "", password: "", show: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleChange2(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        this.setState({show: true})
        event.preventDefault();
    }

    render() {
        let showcommponent = ""
        if(this.state.show === true)
        showcommponent =  <Shown  values = {this.state}/>
                  console.log(showcommponent);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Password:
                    <input type="text" value={this.state.password} onChange={this.handleChange2} />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>

            {showcommponent}
            </div>
        );
    }
}