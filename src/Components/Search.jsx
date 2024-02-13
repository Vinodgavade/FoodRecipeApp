
import { useEffect, useState } from "react"
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6e32e7e2b28c4b9ba6d21ccb8e6568e2";


export default function Search({ foodData, setFoodData }) {

    const [query, setQuery] = useState("Pizza");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            setFoodData(data.results);
        }
        fetchFood();
    }, [query])


    return (
        <div>
            <input className={styles.searchcon} type="text" value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search here" />
        </div>
    )
}