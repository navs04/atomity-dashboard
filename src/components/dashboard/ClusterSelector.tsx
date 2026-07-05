import { clusters } from "../../data/dashboardData";
import styles from "./ClusterSelector.module.css";

interface ClusterSelectorProps{
    selectedCluster: number;
    setSelectedCluster: React.Dispatch<React.SetStateAction<number>>;
}

function ClusterSelector({
    selectedCluster,
    setSelectedCluster,
}: ClusterSelectorProps){
    return (
        <div className={styles.selector}>
           {clusters.map((cluster)=>(
            <button
            key={cluster.id}
            className={`${styles.clusterButton} ${selectedCluster === cluster.id? styles.active : "" }`}
            onClick={() => setSelectedCluster(cluster.id)}>
                {cluster.name}
            </button>
           ))}
        </div>
    );
}

export default ClusterSelector;