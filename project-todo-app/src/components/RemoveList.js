import React, {Component} from 'react';

export default class RemoveList extends Component {

    render() {

        let {id,todo,onRemove} = this.props

        return(
            <li>{todo} <button onClick={() => onRemove(id)}>x</button> </li>
        );
    }
}