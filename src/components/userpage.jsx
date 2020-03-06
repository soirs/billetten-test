import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  constructor(props) {
    super(props);
    const { userId } = this.props.match.params;

    this.state = {
      userId: `${userId}`,
      fetchUserURL: `https://jsonplaceholder.typicode.com/users/${userId}`,
      isLoadingUser: true,
      user: {},
      fetchPostsURL: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      isLoadingPosts: true,
      posts: {},
      fetchAlbumsURL: `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
      isLoadingAlbums: true,
      albums: {},
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchPosts();
    this.fetchAlbums();
  }

  fetchUsers = () => {
    const { fetchUserURL } = this.state;
    const response = fetch(fetchUserURL)
      .then((res) => res.json())
      .then((data) => this.setState({ user: data, isLoadingUser: false }))
      .catch((error) => console.error(error));
    return response;
  };

  fetchPosts = () => {
    const { fetchPostsURL } = this.state;
    const response = fetch(fetchPostsURL)
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data, isLoadingPosts: false }))
      .catch((error) => console.error(error));
    return response;
  };

  fetchAlbums = () => {
    const { fetchAlbumsURL } = this.state;
    const response = fetch(fetchAlbumsURL)
      .then((res) => res.json())
      .then((data) => this.setState({ albums: data, isLoadingAlbums: false }))
      .catch((error) => console.error(error));
    return response;
  };

  render() {
    const {
      userId,
      user,
      posts,
      albums,
      isLoadingPosts,
      isLoadingAlbums,
    } = this.state;
    const { name } = user;
    return (
      <div>
        <div className='container my-20 p-5 mx-auto rounded overflow-hidden shadow-lg'>
          <div className='font-bold text-xl'>name: {name}</div>
          <div className='font-bold text-xl'>Latest Posts:</div>
          {!isLoadingPosts &&
            posts.slice(-3).map((post) => {
              const { id, body, title } = post;
              return (
                <div key={id} className='mx-20'>
                  <p className='font-bold'>{title}</p>
                  <p className=''>{body}</p>
                </div>
              );
            })}
          <div className='font-bold text-xl'>Latest Albums:</div>
          {!isLoadingAlbums &&
            albums.slice(-3).map((album) => {
              const { id, title } = album;
              return (
                <Link
                  key={id}
                  to={`/user/${userId}/album/${id}`}
                  className='mx-20'
                >
                  <p className='font-bold'>Go to -> {title}</p>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}

UserPage.propTypes = {};

export default UserPage;
