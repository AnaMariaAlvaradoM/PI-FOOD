const axios = require("axios");
const { Diets } = require("../db");
const { API_KEY } = process.env;

// Obtener las dietas de la API y guardarlas en la base de datos
const fetchAndSaveDiets = async () => {
  try {
    const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

    const dietSet = new Set();

    data.results.forEach((recipe) => {
      const recipeDiets = recipe.diets;
      recipeDiets.forEach((diet) => dietSet.add(diet));
    });

    const dietPromises = Array.from(dietSet).map((name) =>
      Diets.findOrCreate({ where: { name } })
    );

    await Promise.all(dietPromises);
  } catch (error) {
    throw new Error("Error al obtener las dietas de la API");
  }
};

// Obtener todas las dietas existentes
const getAllDiets = async () => {
  try {
    const diets = await Diets.findAll();
    return diets;
  } catch (error) {
    throw new Error("Error al obtener las dietas");
  }
};

module.exports = {
  fetchAndSaveDiets,
  getAllDiets,
};


// const getAllDiets = async () => {
//   const writed = await Diets.findAll();
  
//   //if para que solo se carguen una vez
//   if (!writed.length) {
//     // const response = await axios.get(`${URL_API}/recipes/complexSearch?${API_KEY}&addRecipeInformation=true`);
//     //const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
//     const response = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);
//     const diets = response.data.results.map((elem) => elem.diets);
//     const allDiets = diets.flat(Infinity);
//     const results = [...new Set(allDiets)];
//     results.forEach((elem) => {
//       Diets.create({ name: elem });
//     });
//     return results;
//   }

//   return writed;
// };

// module.exports = getAllDiets;
