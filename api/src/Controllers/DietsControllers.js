const axios = require('axios');
const { Diets } = require('../models/Diets'); // Asegúrate de importar el modelo Diets desde el archivo donde se encuentra la instancia de Sequelize
const {API_KEY} = process.env;

// Controlador para obtener y guardar las dietas desde la API
const fetchAndSaveDietsFromAPI = async () => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    const dietsFromAPI = response.data?.diets || [];

    // Guardar las dietas en la base de datos
    for (const diet of dietsFromAPI) {
      await Diets.findOrCreate({ where: { title: diet } });
    }

    console.log('Dietas guardadas en la base de datos:', dietsFromAPI);
  } catch (error) {
    console.error('Error al obtener las dietas desde la API:', error);
  }
};

// Controlador para obtener todas las dietas de la base de datos
const getAllDiets = async (req, res) => {
  try {
    const diets = await Diets.findAll();
    return res.json(diets);
  } catch (error) {
    console.error('Error al obtener las dietas desde la base de datos:', error);
    return res.status(500).json({ error: 'Ocurrió un error al obtener las dietas' });
  }
};

module.exports = { fetchAndSaveDietsFromAPI, getAllDiets };