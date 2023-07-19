import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipesDetail, cleanDetail } from "../../Redux/Actions";
import { useEffect } from "react";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { idRecipe, title, healthScore, summary, diets } =
    useSelector((state) => state.recipe);

    useEffect(() => {
      dispatch(getRecipesDetail(id));
      return () => {
        dispatch(cleanDetail());
      };
    }, [dispatch, id]);

  return (
    <div>
    
        <div>
          <h1>Esta es la vista del Detail</h1>
          <h2>Title: {title}</h2>
          <h2>ID: {idRecipe}</h2>
          <h2>Diets: {diets}</h2>
          <h2>Health Score: {healthScore}</h2>
          <h2>Summary: {summary}</h2>
          {/* Resto del código */}
        </div>
      
    </div>
  );
};

export default Detail;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import style from "../Detail/Detail.module.css"

//  const Detail = () =>{  
//   const { idRecipe } = useParams();
//   const [recipeDetail, setRecipeDetail] = useState({});
//   useEffect(() => {
    
//     axios(`http://localhost:3001/recipes/${idRecipe}`)
//       .then(({ data }) => {
      
//         if (data.title) {
         
//           setRecipeDetail(data);
//         } else {
          
//           window.alert('No hay recetas con ese ID');
//         }
//       }); // Limpiar el estado cuando se desmonte el componente
//     return () => setRecipeDetail({});
//   }, [idRecipe]);
//     return(
//         <div className={style.cardContainer}>
//             {
//             recipeDetail ? (
//             <div>
//                 <h1>Esta es la vista del Detail</h1>
//             <h2>Title: {recipeDetail.title}</h2>
//             <h2>diest: {recipeDetail.diets}</h2>
//             <h2>healthscore: {recipeDetail.healthscore}</h2>
//             <h2>Summry: {recipeDetail.summary}</h2>
//             {/* <h2>Paso a paso:</h2>
//             {recipeDetail.steps.map((step) => (
//             <p key={step.number}>Paso {step.number}: {step.step}</p> */}
//                 {/* ))} */}
//                 </div>
//             ):''
                
//         }
//         </div>
//     )
// }
// export default Detail;