import React, {Component} from "react";

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
                color: "yellow"
           });
        } else {
            this.setState({
                color: "Hotpink"
           });
        }
    }

    render(){
        
        const styleObj = {
            backgroundColor: this.state.color
        }

        return(
            <div style={styleObj}>
            <h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
            </div>
        );
    }
}