import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
    return (
        <Button variant="contained" color="primary">
            안녕!
        </Button>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
export default App;
