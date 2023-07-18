
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../Redux/Actions";


const Home = () =>{
    //CUando se monta, lo manejmos con useEffect, el dispatch con useDispatch
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch])

    return(
        <>
            <h1>Esta es la vista de Home</h1>
            <CardsContainer />
        </>
    )
}

export default Home;