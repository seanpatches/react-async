const GetCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quote';
      return json;
    });
};

export default GetCharacters;

