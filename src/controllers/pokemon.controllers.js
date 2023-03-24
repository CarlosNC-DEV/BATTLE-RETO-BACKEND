import Pokemon from "../models/Pokemon.js";

export const crearPokemon = async (req, res) => {
  try {
    const pokemoModel = new Pokemon(req.body);
    await pokemoModel.save();
    res.status(200).json("Pokemon creado correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const verPokemon = async (req, res) => {
  try {
    const idGame = [
      "1A",
      "1B",
      "1C",
      "1D",
      "1E",
      "1F",
      "1G",
      "1H",
      "2A",
      "2B",
      "2C",
      "2D",
      "2E",
      "2F",
      "2G",
      "2H",
      "3A",
      "3B",
      "3C",
      "3D",
      "3E",
      "3F",
      "3G",
      "3H",
      "4A",
      "4B",
      "4C",
      "4D",
      "4E",
      "4F",
      "4G",
      "4H",
    ];

    const pokemon = await Pokemon.find().lean();

    const pokemonWithIds = pokemon.map((card) => {
      const randomIndex = Math.floor(Math.random() * idGame.length);
      const randomId = idGame[randomIndex];
      idGame.splice(randomIndex, 1);
      return { ...card, idGame: randomId };
    });

    res.status(200).json(pokemonWithIds);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const verUnicoPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const unicoPokemon = await Pokemon.findById(id).lean();
    res.status(200).json(unicoPokemon);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
