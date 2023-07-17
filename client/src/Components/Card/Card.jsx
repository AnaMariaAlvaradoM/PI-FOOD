//Este componente debe msotrar la info de cads Receta mapeada, pero además dar un link, para ir al detalle de la receta en cuestión.

const Card = (props) =>{
    return(
        <div>
            <p>Receta:{props.title}</p>
            <p>Puntaje de saluable:{props.healthScore}</p>
            <p>Resumen:{props.summary}</p>
           

        </div>

    )
}
export default Card;