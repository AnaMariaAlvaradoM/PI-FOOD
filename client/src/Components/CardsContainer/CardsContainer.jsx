//Este componente debe tomar un array de recetas, y por cada receta, renderizar un 
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const recipes = useSelector(state=> state.recipes);

  console.log("Recipes:", recipes);
  const recipesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const recipesForCurrentPage = recipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div >
      <div className={style.pagination}>
        {currentPage > 1 && (
          <button onClick={handlePreviousPage}>PREV</button>
        )}
        <span>{currentPage}</span>
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>NEXT</button>
        )}
      </div>

      <div className={style.container}>
        {recipesForCurrentPage.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            diets={recipe.diets}
            healthScore={recipe.healthScore}
            summary={recipe.summary}
            steps={recipe.analyzedInstructions?.[0]?.steps || []}

          />
        ))}
          </div>

    </div>
  );
};

export default CardsContainer;
// import Card from "../Card/Card";   
// import style from "./CardsContainer.module.css"
// import { useSelector } from "react-redux";

// const CardsContainer = () =>{
    
//     const recipes = useSelector(state=>state.recipes)

//     return(
//         <div className={style.container}>
//             {recipes.map(recipe=>{
//                 return <Card 
//                     id={recipe.id}
//                     title={recipe.title}
//                     image={recipe.image}
//                     diets={recipe.diets}
//                     healthScore={recipe.healthScore}
//                     summary={recipe.summary}
//                     steps={recipe.summary}
//                 />
//             })}
//         </div>

//     )
// }
// export default CardsContainer;