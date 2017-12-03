import React, {Component} from 'react';
import Link from './Link';

export default class Menu extends Component {
    render() {
        let menus = [
            'Home',
            'Services',
            'Portfolio',
            'Contact us'
        ];

        return (
            <div>
                {menus.map((v, i) => {
                    return <div key={i}><Link label={v} /></div>
                })}
            </div>
        );
    }
}