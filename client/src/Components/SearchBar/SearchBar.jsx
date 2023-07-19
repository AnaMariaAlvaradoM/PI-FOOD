import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
   const [idRecipe, setId] = useState('')
   
   function handleChange(event){
      //console.log(event.target.value);
      setId(event.target.value)
   }

   return (
      <div className={style.bar}>
         <input type='search' className={style.SearchInput} onChange={handleChange}/>
         <button className={style.SearchButton}
            onClick={() => onSearch(idRecipe)
            }  
            > Agregar  </button>
      </div>
   );
}
