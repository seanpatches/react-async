import GetCharacters from '../services/GetCharacters';
import Characters from '../components/Characters';
import withFetch from '../components/withFetch';

export default withFetch(GetCharacters, [], 'characters') (Characters);
