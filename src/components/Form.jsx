import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: []
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.doSearch(this.state.country);

    this.setState({
      country: []
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="enter country"
            onChange={this.handleChange}
            value={this.state.country} />
          <input className="button" type="submit" value="Search" />
        </form>
      </div>
    )
  }
}