import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import filterEmoji from "./components/filterEmoji";
import EmojiResults from "./components/EmojiResults";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji(""),
    };
  }

  handletextChange = (input) => {
    this.setState({
      filteredEmoji: filterEmoji(input.target.value),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar textChange={this.handletextChange}></SearchBar>
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
