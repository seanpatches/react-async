// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import GetQuotes from '../services/GetQuotes';
// import Quotes from '../components/Characters';

// export default class TopQuotes extends PureComponent {
//   static propTypes = {
//     count: PropTypes.number
//   }

//   static defaultProps = {
//     count: 10
//   }

//   state = {
//     quotes: [],
//     loading: false
//   }
  
//   fetchQuotes = () => {
//     this.setState({ loading: true });
//     GetQuotes(this.props.count)
//       .then(quotes => this.setState({ quotes, loading: false }));
//   }

//   componentDidMount() {
//     this.fetchQuotes();
//   }

//   componentDidUpdate(prevProps){
//     if(prevProps.count !== this.props.count){
//       this.fetchQuotes();
//     }
//   }

//   render() {
//     const { quotes } = this.state;
//     return <Quotes quotes={quotes} />;
//   }


// }
