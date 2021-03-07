import React from 'react';
import './App.css';
import {CardList} from './containers/card-list'
import {SearchBox} from './containers/searchbox/search-box-component' 
type MyState = {
  users: any;
  searchField: any;
  title: "";
}


type MyProps = {
  name: any;
}

export default class App extends React.Component<MyProps, MyState> {

  constructor(props: MyProps){
    super(props);

    this.state = {users: [], searchField: '', title: ""}
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
    .then(resp => {
      this.setState({users: resp})});
  }
  

  render(){

    const {users, searchField, title} = this.state;
    
    const filteredMonsters = users.filter((monster: { name: string; }) => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
      <h1>{title}</h1>

        <SearchBox placeHolder="monsters" handleChange={(e: { target: { value: any; }; }) => 
        this.setState({searchField: e.target.value }, () => {
        })
      } />

        <CardList users={filteredMonsters} />
      </div>
    )
  }

}
