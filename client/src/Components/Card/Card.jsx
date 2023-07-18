//Este componente debe msotrar la info de cads Receta mapeada, pero además dar un link, para ir al detalle de la receta en cuestión.
import React from "react";
import style from "./Card.module.css";

const Card = (props) =>{
    return(
        <div className={style.card}>
            <p>Receta:{props.title}</p>
            <p>Puntaje de saluable:{props.healthScore}</p>
            <p>Tipo de dieta:{props.diets}</p>
           

        </div>

    )
}
export default Card;