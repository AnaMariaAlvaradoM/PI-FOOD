//Este componente debe msotrar la info de cads Receta mapeada, pero además dar un link, para ir al detalle de la receta en cuestión.
// import React from "react";
// import style from "./Card.module.css";
// import { Link } from "react-router-dom";

// const Card = (props) =>{
    
//   console.log("idRecipeCars:", props.title);
//     return(
//         <div className={style.cardContainer}>
//             <div className={style.contentContainer}>
//                 <img src={props.image} alt="" />
//                 <p>RECETA:</p>   
//                 <Link to={`/detail/${props.title}`}>
//                     <h1 className={style.titleName}> {props.title} </h1>
//                 </Link> 
//                 <h2>Tipo de dieta: {props.diets}</h2>
//             </div>
//         </div>      
//     )
// }
// export default Card;

import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) =>{
    
  console.log("idRecipeCards:", props.title);
    return(
        <div className={style.cardContainer}>
            <div className={style.contentContainer}>
                <img src={props.image} alt="" />
                {/* <p>RECETA:</p>    */}
                <Link to={`/detail/${props.id}`}>
                    <h1 className={style.titleName}> {props.title} </h1>
                </Link> 
                <h2>Diet: {props.diets}</h2>
            </div>
        </div>      
    )
}
export default Card;