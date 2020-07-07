import React, { Component } from "react";
import Button from "../../../components/Button/Button"
import "./SearchBar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  handleClick = (event) =>
    event.target.setSelectionRange(0, event.target.value.length);

  handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value) {
      this.search();
    }
  };

  search = () => this.state.term && this.props.onSearch(this.state.term);

  onChange = (event) => this.setState({ term: event.target.value });

  render = () => (
    <div className="searchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={this.onChange}
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
      />
      <Button className="SearchButton" onClick={this.search}>
        SEARCH
      </Button>
    </div>
  );
}

export default SearchBar;
