import { clusters } from "../../data/dashboardData";
import styles from "./ClusterSelector.module.css";

function ClusterSelector(){
    return (
        <div className={styles.selector}>
           {clusters.map((cluster)=>(
            <button
            key={cluster.id}
            className={`${styles.clusterButton} ${cluster.name === "Production"? styles.active : "" }`}>
                {cluster.name}
            </button>
           ))}
        </div>
    );
}

export default ClusterSelector;