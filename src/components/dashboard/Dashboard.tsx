import Header from "./Header";
import ClusterSelector from "./ClusterSelector";
import BarChart from "./BarChart";
import MetricsTable from "./MetricsTable";

function Dashboard(){
    return (
        <section className="dashboard">
            <Header />
            <ClusterSelector />
            <BarChart />
            <MetricsTable />
        </section>
    );
}

export default Dashboard;