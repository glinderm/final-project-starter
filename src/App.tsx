import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    Welcome!
                </h2>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
          Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Counter />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
            </header>
        </div>
    );
}

class Counter extends React.Component {
    state = {
        count: 0
    };
    render() {
        return <button onClick={() => this.setState({ count : this.state.count + 1})}>{this.state.count}</button>;
    }
}

export default App;
