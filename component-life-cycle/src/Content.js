import React from 'react';

class Content extends React.Component {

    componentWillMount() {
        console.log('Component WILL MOUNT !');
    }

    componentDidMount() {
        console.log('Component DID MOUNT !');
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS !');
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
        
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UN-MOUNT !');
    }

    render() {
        let { myNumber } = this.props;
        return (
            <h2>{myNumber}</h2>
        );
    }
}

export default Content;