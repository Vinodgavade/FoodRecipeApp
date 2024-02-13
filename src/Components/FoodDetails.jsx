import { useEffect, useState } from 'react';
import styles from './fooddetails.module.css'
import ItemList from './ItemList';

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "6e32e7e2b28c4b9ba6d21ccb8e6568e2";

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data)
            setIsLoading(false)
        }
        fetchFood()
    }, [foodId])

    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="foodimage" />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⏱ {food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        👨‍👨‍👦‍👦<strong> Serves {food.servings}</strong>
                    </span>
                    <span>
                        <strong>{food.vegetarian ? " 🥕🍅🥜🥒🍠 Vegetarian" : " 🍗🥩🍖 Non-Vegetarian"}</strong>
                    </span>
                    <span>
                        <strong>  {food.vegan ? "Vegan" : ""}</strong>
                    </span>
                </div>
                <div>
                    <strong>$ <span>{food.pricePerServing / 100} PerServing</span></strong>
                </div>

                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading} />
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            food.analyzedInstructions[0].steps.map((step) => (<li>{step.step}</li>))
                        )}
                    </ol>
                </div>
            </div>
        </div>
    )
}