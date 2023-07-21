import React from "react";
import { useDispatch } from "react-redux";
// import SearchBar from "../../Components/SearchBar/SearchBar";
import { getRecipes } from "../../Redux/Actions";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div >
      {/* <SearchBar /> */}
      <CardsContainer />
    </div>
    
  );
};

export default Home;
        // <>
        //     <h1>Esta es la vista de Home</h1>
        //     <CardsContainer />
        // </>