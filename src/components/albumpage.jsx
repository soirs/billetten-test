import React, { Component } from 'react';

class AlbumPage extends Component {
  constructor(props) {
    super(props);
    const { albumId } = this.props.match.params;

    this.state = {
      albumId: `${albumId}`,
      fetchAlbumsURL: `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      isLoadingAlbum: true,
      album: {},
    };
  }

  componentDidMount() {
    this.fetchAlbum();
  }

  fetchAlbum = () => {
    const { fetchAlbumsURL } = this.state;
    const response = fetch(fetchAlbumsURL)
      .then((res) => res.json())
      .then((data) => this.setState({ album: data, isLoadingAlbum: false }))
      .catch((error) => console.error(error));
    return response;
  };

  render() {
    const { album, isLoadingAlbum } = this.state;
    return (
      <div className='container my-20 p-5 mx-auto rounded overflow-hidden shadow-lg'>
        <h1>Photo Album</h1>
        <div className='flex flex-wrap'>
          {!isLoadingAlbum &&
            album.map((item) => {
              const { id, title, thumbnailUrl } = item;
              return (
                <div
                  key={id}
                  className='rounded overflow-hidden w-1/5 px-6 py-4 shadow-lg bg-gray-100'
                >
                  <img src={thumbnailUrl} alt='' />
                  <p>{title}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default AlbumPage;
