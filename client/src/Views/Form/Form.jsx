import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../../Redux/Actions";
import styles from "./Forms.module.css"

const Form = () => {
  const [form, setForm] = useState({
    title: "",
    image: "",
    diets: [],
    summary: "",
    healthScore: "",
    steps: [],
  });

  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (event) => {
    const { options } = event.target;
    const selectedDiets = [...options]
      .filter((option) => option.selected)
      .map((option) => option.value);
  
    setForm({ ...form, diets: selectedDiets });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Convertir el valor del textarea a un arreglo de pasos
  const stepsArray = form.steps.split("\n").map((step) => ({ step }));

  // Actualizar el formulario con el arreglo de pasos
  setForm({ ...form, steps: stepsArray });
    // Realizar aquí las validaciones que necesites, por ejemplo:
    if (form.title.trim() === "") {
      alert("El nombre de la receta es requerido");
      return;
    }
    // Resto de validaciones...

    // Enviar los datos del formulario a través de la acción
    dispatch(createRecipe(form));

    // Limpiar el formulario después de enviarlo
    setForm({
      title: "",
      image: "",
      diets: [],
      summary: "",
      healthScore: "",
      steps: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.imagen}>
        <label>Imagen: </label>
        <input
          type="text"
          value={form.image}
          onChange={changeHandler}
          name="image"
        />
      </div >
      <div className={styles.dietsContainer}>
        <label>Tipo de dieta: </label>
        <select
          multiple
          value={form.diets}
          onChange={handleSelectChange}
          name="diets"
        >
          {diets.map((diet) => (
            <option key={diet.id} value={diet.title}>
              {diet.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Índice de salud: </label>
        <input
          type="text"
          value={form.healthScore}
          onChange={changeHandler}
          name="healthScore"
        />
      </div>
      <div>
        <label>Resumen: </label>
        <input
          type="text"
          value={form.summary}
          onChange={changeHandler}
          name="summary"
        />
      </div>
      <div>
        <label>Paso a paso: </label>
        <input
          type="text"
          value={form.steps}
          onChange={changeHandler}
          name="steps"
        />
      </div>
      <button type="submit">Crear receta</button>
    </form>
  );
};
export default Form;


// const Form = () =>{
//     const [form, setForm] = useState({
//         title:"",
//         image:"",
//         diets:"",
//         healthScore:"",
//         summary:"",
//         steps:""
//     })
//     const changeHandler = (event) => { 
//         //leer lo que escribí y guardarlo en donde corresponda
//         const property = event.target.name;
//         const value = event.target.value;

//         setForm({...form, [property]:value})
//     }

//     return(
//         <form>
//             <div>
//                 <label>Nombre : </label>
//                 <input type="text" value={form.title} onChange={changeHandler} name="title" />
//             </div>
//             <div>
//                 <label>Imagen: </label>
//                 <input type="text" value={form.image} onChange={changeHandler} name="image"/>
//             </div>
//             <div>
//                 <label>Tipo de dieta: </label>
//                 <input type="text" value={form.diets} onChange={changeHandler} name="diets"/>
//             </div>
//             <div>
//                 <label>Índice de salud: </label>
//                 <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"/>
//             </div>
//             <div>
//                 <label>Resumen:  </label>
//                 <input type="text" value={form.summary} onChange={changeHandler} name="summary"/>
//             </div>
//             <div>
//                 <label>Paso a paso: </label>
//                 <input type="text" value={form.steps} onChange={changeHandler} name="steps"/>
//             </div>
//         </form>
//     )
// }

// export default Form;


