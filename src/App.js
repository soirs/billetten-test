import React, { Component } from 'react';
import './App.css';
import UserCard from './components/user-card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchUserURL: 'https://jsonplaceholder.typicode.com/users',
      isLoading: true,
      users: [],
      searchValue: '',
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const { fetchUserURL } = this.state;

    const response = fetch(fetchUserURL)
      .then((res) => res.json())
      .then((data) => this.setState({ users: data, isLoading: false }))
      .catch((error) => console.error(error));
    return response;
  };

  searchValue = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { users, isLoading, searchValue } = this.state;

    // Sender data object til UserCard
    const filteredUsers = users.filter((item) =>
      item.name.includes(searchValue)
    );
    return (
      <div className='App container my-20 mx-auto'>
        <input
          type='text'
          placeholder='Search ...'
          onChange={(e) => this.searchValue(e)}
          className='transition-colors duration-100 ease-in-out focus:outline-0 border border-gray-500 focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 my-5 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input'
        />
        <UserCard users={filteredUsers} isLoading={isLoading} />
      </div>
    );
  }
}

export default App;
