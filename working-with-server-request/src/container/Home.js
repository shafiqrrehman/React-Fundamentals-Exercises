import React from 'react';
import { TextField,  RefreshIndicator } from 'material-ui';
import HomeComponent from '../components/Home';
import { CreateTodo } from '../services/todo.js';


export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            matchValue: 'cmad',
            loading: false
        }
    }

    onInputChange(e) {
        console.log("in onInputChange", e);
        this.setState({
            value: e.target.value
        })
    }


    gotoAboutPage() {
        if(this.state.vale === this.state.matchValue) {
            this.props.history.push("/about")
        }
    }

    sendToServer() {
        const self = this;
        this.setState({loading:true});
        CreateTodo({name: this.state.value})
        .then((response) => {
            console.log("response");
            console.log(response);
            this.setState({loading: false});
            self.props.history.push("/about")
        })
        .catch((error)=> {
            console.log("error");
            console.log(error);
            this.setState({loading:false});        
        });
    }

    render() {
        return (
            <div>
            <h1>Home Page</h1>
            {(this.state.loading === true) ?  <RefreshIndicator size={40} status="loading" left={100} top={100}/> : null }
            <HomeComponent handleMyInput ={this.onInputChange.bind(this)} callContainerFunction={this.sendToServer.bind(this)} isLoading={this.state.loading}/>
            </div>
        );
    }
}