import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

export default function Detail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    console.log("idRecipDetail:", id); // Agrega este console.log
    axios(`http://localhost:3001/recipes/${id}`)
        .then(({ data }) => {
          setRecipe(data);
      })
      .catch((error) => {
        console.error("Error:", error);
       // window.alert("No se pudo obtener el detalle de la receta");
      });
  }, [id]);

  return (
    <div>
      <div className={style.CardIndividual}>
        <div className={style.header}>
          {/* <h1>Detalle de la receta</h1> */}
          <h1>{recipe.title}</h1>
          <div className={style.imagen}>
            <img  src={recipe.image} alt="" />
          </div>
          <h2>ID: {recipe.id}</h2> 
          <h2>Diets:</h2>
<ul>
  {Array.isArray(recipe.diets) ? (
    recipe.diets.map((diet) => (
      <li key={diet}>{diet}</li>
    ))
  ) : (
    <li>No se encontraron dietas</li>
  )}
</ul>
        {/* <h2>Diets: {recipe.diets}</h2> */}
        {/* <h2>Diets: </h2>
<ul>
  {recipe.diets?.map((diets) => (
    <li key={diets}>{diets}</li>
  ))}
</ul> */}
        <h2>Health Score: {recipe.healthScore}</h2>
        <h2>Summary: {recipe.summary}</h2> 
        </div>
      </div>
        <h3>Steps:</h3>
          <ul>
            {recipe.steps?.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ul>
    </div>
  );
}



