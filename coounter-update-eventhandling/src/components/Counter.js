import React, {Component} from 'react';
import ShowRecord from './ShowRecord.js';

export default class Counter extends Component {

    constructor(){
        super();
        this.state = {counterUpdate: 1};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({
            counterUpdate: this.state.counterUpdate + 1
        });
        event.preventDefault();
    }
    

    render() {
        return (
            <div>
                <ShowRecord counter = {this.state.counterUpdate} />
                <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Click for Counter" />
                </form>
            </div>
        );
    }
}