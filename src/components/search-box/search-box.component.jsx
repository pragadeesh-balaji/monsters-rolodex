import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  constructor() {
    super();
  }

  render() {
    const { className, placeHolder, onChangeHandler } = this.props;
    return (
      <div className="search">
        <input
          type="search"
          className={`search-box ${className}`}
          placeholder={placeHolder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
