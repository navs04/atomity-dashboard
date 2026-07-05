import Header from "./Header";
import ClusterSelector from "./ClusterSelector";
import styles from "./Dashboard.module.css";

function Dashboard(){
    return (
        <section className={styles.wrapper}>
            <div className={styles.card}>
                <Header />
                <ClusterSelector />
            </div>
        </section>
    );
}

export default Dashboard;