import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.titleSection}>
                <h2>Cloud Cost Analytics</h2>
                <p> Monitor and optimize infrastructure costs across environments.</p>
            </div>

            <button className={styles.timeFilter}>
                Last 30 Days
            </button>
        </header>
    );
}

export default Header;