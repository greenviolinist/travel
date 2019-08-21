import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import { fetchCountries, getPhotos } from './services/api';
import Form from './components/Form';
import Summary from './components/Summary';
import Pictures from './components/Pictures';
import Map from './components/Map';
import WelcomeImage from './components/WelcomeImage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      pics: []
    }
  }

  //searching for a country will trigger both api calls
  handleSearch = async (name) => {
    const resp = await fetchCountries(name);
    const pics = await getPhotos(name);
    this.setState({
      info: resp,
      pics: pics
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Destination">Destination</Link>
          <Link to="/Pictures">Pictures</Link>
          <Link to="/Map">Map</Link>
        </nav>
        <main>

          <Route path="/" exact render={() => <Home />} />
          <Route path="/" exact render={() => <WelcomeImage />} />
          <Route path="/Destination" exact render={() =>
            <Form doSearch={this.handleSearch}
            />} />
          <Route path="/Destination" exact render={() =>
            <Summary infoData={this.state.info}
            />} />
          <Route path="/Pictures" exact render={() =>
            <Pictures picData={this.state.pics} />} />
          <Route path="/Map" exact render={() => <Map />} />
        </main>
      </div>
    );
  }
}

export default App;
