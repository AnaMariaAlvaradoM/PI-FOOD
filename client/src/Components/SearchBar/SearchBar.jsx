import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeByName } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const history = useHistory();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnClick = () => {
    dispatch(getRecipeByName(title));
    // Redirigir al detalle de la receta, si hay un único resultado
    const result = recipes.filter((recipe) => recipe.title.toLowerCase().includes(title.toLowerCase()));
    if (result.length === 1) {
      const recipeId = result[0].id;
      // Redireccionar a la página de detalles con el id de la receta
      history.push(`/detail/${recipeId}`);
    }
    setTitle(""); // Vaciar el cuadro de entrada después de la búsqueda
  };

  return (
    <div className={styles.container}>
        <input
        value={title}
        type="text"
        name="search"
        id="search"
        placeholder="Enter recipe name..."
        onChange={handleChange}
      />
      <button  onClick={handleOnClick} >
        Search
        </button>
    </div>
  );
}