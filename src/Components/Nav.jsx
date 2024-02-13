import styles from './Nav.module.css'
import Search from './Search'
export default function Nav({ foodData, setFoodData }) {
    return (
        <div className={styles.nav}>
            <div className={styles.navheading}>
                🍔FoodApp
            </div>
            <div className={styles.navsearchbox}>
                <Search foodData={foodData} setFoodData={setFoodData} />
            </div>
            <div>
                <ul className={styles.navli}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">LogIn</a></li>
                </ul>
            </div>
        </div>
    )
}