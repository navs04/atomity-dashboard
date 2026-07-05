import { useState } from "react";
import {motion} from "framer-motion";
import { useClusterData } from "../../hooks/useClusterData";
import Header from "./Header";
import ClusterSelector from "./ClusterSelector";
import BarChart from "./BarChart";
import MetricsTable from "./MetricsTable";
import styles from "./Dashboard.module.css";

function Dashboard(){
    const [selectedCluster, setSelectedCluster] = useState(1);

    const {data, isLoading, isError} = useClusterData();

    const clusterProducts = data?.products?.slice(
        (selectedCluster - 1 ) * 6,
        selectedCluster * 6
    )??[];

    const chartData = clusterProducts.map((product: any) => ({
        label: product.title.substring(0, 3),
        value: product.price,
    }));

    if(isLoading){
        return (
        <section className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Loading dashboard...</h2>
            </div>
        </section>
        );
    }

    if(isError){
        return (
        <section className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Unable to load dashboard data.</h2>
            </div>
        </section>
       );
    }

    return (
        <motion.section 
        className={styles.wrapper}
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.7}}>
            <div className={styles.card}>
                <Header />
                <ClusterSelector
                selectedCluster= {selectedCluster}
                setSelectedCluster= {setSelectedCluster}/>

                <div className={styles.content}>
                    <BarChart chartData = {chartData} />
                    <MetricsTable products={clusterProducts} />
                </div>
            </div>
        </motion.section>
    );
}

export default Dashboard;