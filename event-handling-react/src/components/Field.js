import React, {Component} from "react";
import './../App.css';

export default class Field extends Component{

    constructor(props){
        super(props);

        this.state = {
            color: "Hotpink"
        }
    }

    toggleColor(){
        if (this.state.color === "Hotpink") {
            this.setState({
                color: "Yellow"
           });
        } else {
            this.setState({
                color: "Hotpink"
           });
        }
    }

    changeColor(event){
        this.setState({
            color: event.target.value
        });
    }

    render(){
        
        const styleObj = {
            backgroundColor: this.state.color,
        }

        return(
            <div style={styleObj} id="dynamic">
            <h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
            <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
            </div>
        );
    }
}