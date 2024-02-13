import styles from './fooditem.module.css'
export default function FoodItem({ food, setFoodId }) {
    return (
        <div className={styles.itemcontainer}>
            <img className={styles.itemimage} src={food.image} alt="food image" />
            <div className={styles.itemcontent}>
                <p className={styles.itemname}>{food.title}</p>
            </div>
            <div className={styles.btncontainer}>
                <button onClick={() => { setFoodId(food.id) }} className={styles.itembutton}>View Recipe</button>
            </div>
        </div >
    )
}