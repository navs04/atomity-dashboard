import { useState } from "react";
import Header from "./Header";
import ClusterSelector from "./ClusterSelector";
import BarChart from "./BarChart";
import MetricsTable from "./MetricsTable";
import styles from "./Dashboard.module.css";

function Dashboard(){
    const [selectedCluster, setSelectedCluster] = useState(1);

    return (
        <section className={styles.wrapper}>
            <div className={styles.card}>
                <Header />
                <ClusterSelector
                selectedCluster= {selectedCluster}
                setSelectedCluster= {setSelectedCluster}/>

                <div className={styles.content}>
                    <BarChart />
                    <MetricsTable />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;