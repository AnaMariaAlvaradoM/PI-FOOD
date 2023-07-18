//Este componente debe tomar un array de recetas, y por cada receta, renderizar un 

import Card from "../Card/Card";   
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = () =>{
    
    const recipes = useSelector(state=>state.recipes)

    return(
        <div className={style.container}>
            {recipes.map(recipe=>{
                return <Card 
                    id={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    diets={recipe.diets}
                    healthScore={recipe.healthScore}
                    summary={recipe.summary}
                    steps={recipe.summary}
                />
            })}
        </div>

    )
}
export default CardsContainer;