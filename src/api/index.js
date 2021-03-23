const json = async (results = []) => {
  const json = [];
  for(let i = 0; i < results.length; i++) {
    const j =  await results[i].json();
    json.push(j);
  }

  return json;
};

const getCards = async () => {
  const ref = {
    squirtle: 7,
    charmander: 4,
    bulbasaur: 1,
  };
  const queries = Object.keys(ref).map(key => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${ref[key]}`);
  });
  const results = await Promise.all(queries);
  return await json(results);
};

const getRandomCard = async () => {
  const random = Math.floor(Math.random() * 20) + 1;
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
  const json = await result.json();
  debugger

  return json;
};


export {
  getCards,
  getRandomCard,
}