import { useState  } from "react";

const Form = () =>{
    const [form, setForm] = useState({
        title:"",
        image:"",
        diets:"",
        healthScore:"",
        summary:"",
        steps:""
    })
    const changeHandler = (event) => { 
        //leer lo que escribí y guardarlo en donde corresponda
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})
    }

    return(
        <form>
            <div>
                <label>Nombre : </label>
                <input type="text" value={form.title} onChange={changeHandler} name="title" />
            </div>
            <div>
                <label>Imagen: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"/>
            </div>
            <div>
                <label>Tipo de dieta: </label>
                <input type="text" value={form.diets} onChange={changeHandler} name="diets"/>
            </div>
            <div>
                <label>Índice de salud: </label>
                <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"/>
            </div>
            <div>
                <label>Resumen:  </label>
                <input type="text" value={form.summary} onChange={changeHandler} name="summary"/>
            </div>
            <div>
                <label>Paso a paso: </label>
                <input type="text" value={form.steps} onChange={changeHandler} name="steps"/>
            </div>
        </form>
    )
}

export default Form;


