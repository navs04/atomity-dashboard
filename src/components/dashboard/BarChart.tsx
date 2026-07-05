import {motion} from "framer-motion";
import styles from "./BarChart.module.css";

interface ChartItem{
    label: string;
    value: number;
}

interface BarChartProps{
    chartData: ChartItem[];
}

function BarChart({chartData}: BarChartProps){
    const maxValue = Math.max(...chartData.map(item=> item.value),
1);

    return (
        <section className={styles.chart}>
            <h3>Monthly Cloud Spend</h3>

            <div className={styles.bars}>
               {chartData.map((item)=> (
                <div key={item.label} className={styles.barContainer}>
                    <motion.div className={styles.bar}
                     initial={{height: 0}}
                     animate={{
                        height: `${(item.value / maxValue) * 220}px`,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}/>

                    <span>{item.label}</span>
                </div>
               ))
               }
            </div>
        </section>
    );
}

export default BarChart;