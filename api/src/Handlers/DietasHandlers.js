const { fetchAndSaveDiets, getAllDiets } = require("../Controllers/DietsControllers");

// Manejador para obtener las dietas
const getDietsHandler = async (req, res) => {
  try {
    // Verificar si las dietas ya están cargadas en la base de datos
    const diets = await getAllDiets();
    if (diets.length > 0) {
      res.status(200).json(diets);
    } else {
      // Si no hay dietas en la base de datos, obtenerlas de la API y guardarlas
      await fetchAndSaveDiets();
      const updatedDiets = await getAllDiets();
      res.status(200).json(updatedDiets);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDietsHandler,
};


// const {getAllDiets }= require("../Controllers/DietsControllers")

// const getAllDietsHandler= async (req, res) => {
//   try {
//     const allDiets = await getAllDiets();
//     res.status(200).json(allDiets);
//   } catch (error) {
//     res.status(404).send({error: error.message});
//   }
// }

// module.exports = { getAllDietsHandler };