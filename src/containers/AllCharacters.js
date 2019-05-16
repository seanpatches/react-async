import React, { PureComponent } from 'react';
import GetCharacters from '../services/GetCharacters';
import Characters from '../components/Characters';

export default class TopQuotes extends PureComponent {

  state = {
    characters: [],
    loading: false,
    page: 1,
    totalPages: 1
  }

  nextPage = () => {
    this.setState(state => {
      if(state.totalPages)
        return { page: state.page + 1 };
    });
  }

  lastPage = () => {
    this.setState(state => {
      if(state.page !== state.totalPages - 1){
        return { page: state.page - 1 };
      }
    });
  }
  
  fetchCharacters = () => {
    this.setState({ loading: true });
    GetCharacters()
      .then(res => {
        return Promise.all([
          res.results,
          res.info
        ]);
      })
      .then(([characters, info]) => {
        return this.setState({ characters, totalPages: info.pages, loading: false });
      });
  }

  componentDidMount() {
    this.fetchCharacters();
  }
  
  render() {
    const { characters } = this.state;
    return (
    <>
    <button onClick={this.lastPage}>Last Page</button>
    <Characters characters={characters} />
    <button onClick={this.nextPage}>Next Page</button>
    </>
    );
  }
}
