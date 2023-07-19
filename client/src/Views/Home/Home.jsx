import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../Redux/Actions";
import style from "./Home.modules.css";

const Home = () =>{
    //Cuando se monta, lo manejmos con useEffect, el dispatch con useDispatch
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch])

    return(
    <div className={style.homeContainer}>

        <CardsContainer />
    </div>
    )
}

export default Home;
        // <>
        //     <h1>Esta es la vista de Home</h1>
        //     <CardsContainer />
        // </>