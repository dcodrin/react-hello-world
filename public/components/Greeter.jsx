import React from 'react';

import GreeterMessage from 'GreeterMessage';
import GreeterForm from 'GreeterForm';

class Greeter extends React.Component {

    constructor(props) {

        //The props are the default props of the Greeter Instance or other props
        //passed to Greeter when it is called. Please see the console logs.
        console.log(props, 'Constructor props');

        //The super is invoked with the same props.
        super(props);

        //Setting our initial state.
        this.state = {
            name: props.name,
            message: props.message
        };

        //Binding the 'this' for handleDataChange. If this step is omitted
        //the 'this' inside the handleDataChange function would not be referencing
        //the current instance of Greeter.
        this.handleDataChange = this.handleDataChange.bind(this);

    }

    handleDataChange(data) {
        //Using the React function setState() to change the state and re-render
        //the necessary components.
        this.setState(data);
    }

    render() {
        return (
            <div>
                <h1>This is a React World!</h1>
                <GreeterMessage name={this.state.name} message={this.state.message}/>
                <GreeterForm handleDataChange={this.handleDataChange}/>
            </div>
        );
    }
}
//Validating props. ONLY CHECKED DURING DEVELOPMENT MODE.
Greeter.propTypes = {
    name: React.PropTypes.string,
    message: React.PropTypes.string
};
//Define default props
Greeter.defaultProps = {
    name: 'Scooby',
    message: 'Welcome to the future!'
};

export default Greeter;


