import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";

class SearchBar extends Component {
  static propTypes = {
    textChange: PropTypes.func,
  };

  handleChange(input) {
    this.props.textChange(input);
  }

  render() {
    return (
      <div className="div component-search-input">
        <div className="div">
          <input className="input" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
