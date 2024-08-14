import { Line } from "react-chartjs-2"
import config from "../../../shared/config/chart"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

const LinesChart = ({data}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    )
    return <Line data={data}  options={config}/>
}

export default LinesChart