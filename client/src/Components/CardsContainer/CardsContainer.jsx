//Este componente debe tomar un array de recetas, y por cada receta, renderizar un 

import Card from "../Card/Card";   
const CardsContainer = () =>{
    const recipes = [
        {
            "title": "Prueba2 rice",
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "dietTypes": [
              "gluten free",
              "dairy free",
              "lacto ovo vegetarian",
              "vegan"
            ],
            "summary": "You can never have too many Chinese recipes, s/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice.",
            "healthScore": 75,
            "steps": [
              {
                "number": 1,
                "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\""
              },
              {
                "number": 2,
                "step": "Heat 1T butter and 1T oil in a large skillet over medium heat."
              },
              {
                "number": 3,
                "step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute."
              },
              {
                "number": 4,
                "step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again."
              },
              {
                "number": 5,
                "step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom."
              } ]
          }

    ]

    return(
        <div>
            {recipes.map(recipe=>{
                return <Card 
                    id={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    healthScore={recipe.healthScore}
                    summary={recipe.summary}
                    steps={recipe.summary}
                />
            })}
        </div>

    )
}
export default CardsContainer;