import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  searchFieldUpdate = (event) => {
    this.setState(
      () => {
        const searchField = event.target.value;
        return { searchField };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="page">
        <SearchBox
          className="search--type-1"
          placeHolder="search monsters"
          onChangeHandler={this.searchFieldUpdate}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
