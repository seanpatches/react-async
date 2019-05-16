import React, { PureComponent } from 'react';
import GetCharacters from '../services/GetCharacters';
import Characters from '../components/Characters';

export default class TopQuotes extends PureComponent {

  state = {
    characters: [],
    loading: false
  }
  
  fetchCharacters = () => {
    this.setState({ loading: true });
    GetCharacters()
      .then(res => res.results)
      .then(characters => this.setState({ characters, loading: false }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return <Characters characters={characters} />;
  }
}
