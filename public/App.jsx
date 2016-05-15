import React from 'react';
import ReactDOM from 'react-dom';

import Greeter from 'Greeter';

class App extends React.Component {
    render() {
        return (
            <div>
                <Greeter testProp="This is a test prop only."/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('#app'));
