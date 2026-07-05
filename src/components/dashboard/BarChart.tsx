import styles from "./BarChart.module.css";

function BarChart(){
    return (
        <section className={styles.chart}>
            <h3>Monthly Cloud Spend</h3>

            <div className={styles.bars}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </section>
    );
}

export default BarChart;