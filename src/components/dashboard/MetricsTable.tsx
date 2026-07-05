import {motion} from "framer-motion";
import styles from "./MetricsTable.module.css";

interface Product{
    id: number;
    title: string;
    price: number;
    stock: number;
    rating: number;
}

interface MetricTableProps{
    products: Product[];
}

function MetricsTable({products}: MetricTableProps){
    return (
        <section className={styles.table}>
            <h3>Cluster Metrics</h3>

            <table>
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Cost ($)</th>
                        <th>Usage</th>
                        <th>Health</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product)=>(
                        <motion.tr 
                        key={product.id}
                        initial={{opacity: 0, y: 15}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3}}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}%</td>
                            <td>{product.rating}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default MetricsTable;