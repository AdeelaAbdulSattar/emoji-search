import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

class SearchBar extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func,
  };

  handleChange(val) {
    this.props.textChange(val);
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
