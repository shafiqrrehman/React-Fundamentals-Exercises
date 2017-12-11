import React from 'react';
import {TextField} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

function Home(props) {
    const style = {
        margin: 12,
      };

    return (
        <div>
            <TextField floatingLabelText="Floating Label Text" onChange={props.handleMyInput} />
            <RaisedButton onClick={props.callContainerFunction} label="Secondary" disabled={props.isLoading} secondary={true} style={style} />
        </div>
    );

}

export default Home;
