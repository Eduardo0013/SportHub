import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

const DoughnutChart = ({ data, ...props }) => {
    ChartJS.register(ArcElement, Tooltip, Legend)
    
    return (
        <Doughnut data={data} {...props}/>
    )
}

export default DoughnutChart