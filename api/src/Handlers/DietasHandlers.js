const { getAllDiets } = require('../Controllers/DietsControllers');

// Manejador para obtener todas las dietas desde la base de datos
const getDietsHandler = async (req, res) => {
  return getAllDiets(req, res);
};

module.exports = { getDietsHandler };

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