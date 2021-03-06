import React from 'react';
import axios from 'axios';
import Dark from './components/DarkmodeButton';

class App extends React.Component {
  state = {
    api: 'http://localhost:5000/api/players',
    players: [],
  };

  componentDidMount() {
    axios.get(this.state.api)
      .then(response => {
        const list = response.data;
        console.log("Successfully accessed data.")
        this.setState({players: list })})
      .catch(error => console.log('Unable to access data.', error));  
  }

  render() {
    return (
      <div className="app">
        <h1>Players by Search Count</h1>
        <Dark />
        <div className="list">
          <ol>
            {this.state.players.map(player => (
              <li className="list-item">{player.name} from {player.country}, {player.searches} searches</li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;