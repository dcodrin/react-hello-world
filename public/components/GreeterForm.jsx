import React from 'react';

class GreeterForm extends React.Component {

    constructor() {
        super();
        //Binding the 'this' to the current instance of GreeterForm
        this.onDataChange = this.onDataChange.bind(this);

    }

    onDataChange(e) {
        //Prevent the default 'submit' behavior
        e.preventDefault();

        //Create an empty object used to keep track of changes
        let newData = {};

        //Basic validation
        if (this.refs.name.value.length > 0) {
            //Assign data to our empty object
            newData.name = this.refs.name.value;
            //Clear the input field
            this.refs.name.value = '';

        }
        if (this.refs.message.value.length > 0) {
            newData.message = this.refs.message.value;
            this.refs.message.value = '';
        }

        //Call the parent function with the new data to refresh the components.
        this.props.handleDataChange(newData);

    }

    render() {
        return (
            <form onSubmit={this.onDataChange}>
                <div><input placeholder="Enter Name" type="text" ref="name"/></div>
                <div><textarea placeholder="Enter Message" name="message" ref="message" cols="30" rows="10"/></div>
                <div>
                    <button>Change Content</button>
                </div>
            </form>
        );
    }
}

export default GreeterForm;
