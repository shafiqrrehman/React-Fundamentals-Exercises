import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.player.url} alt={this.props.player.name} width="300px" height="250px" align="center" />
                <h3>{this.props.player.name}</h3>
                <p>He is one of the best {this.props.player.profession} in the world. 
                Here are the some hobbies of {this.props.player.name} which are given below:</p>
                <h5>Hobbies</h5>
                <ul>
                    {this.props.player.hobbies.map((hobbies, i) => <li key={i}>{hobbies}</li>)}
                </ul>
                <footer>The {this.props.name} with the age of {this.props.age} is the Auther of above article.</footer>
            </div>
        );
    }
}

export default Home;

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    player: PropTypes.object

};