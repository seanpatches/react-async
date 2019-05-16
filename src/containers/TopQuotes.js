import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GetQuotes from '../services/GetQuote';
import Quotes from '../components/Quotes';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: [],
    loading: false
  }
  
  fetchQuotes = () => {
    this.setState({ loading: true });
    GetQuotes(this.props.count);
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps){
    if(prevProps.count !== this.props.count){
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }


}
