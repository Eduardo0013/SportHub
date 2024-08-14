import { useEffect, useState } from "react"
import { TORNEOS } from '@Modules/shared/config/web-services'
import LinesChart from "@Modules/core/components/lines-chart/LinesChart"
import months from '@Modules/shared/utils/months'
import useFetch from '@Modules/core/hooks/useFetch'

const TournamentLines = () => {
    const { loading, value } = useFetch(TORNEOS)
    const [data, setData] = useState({
        options: {},
        labels: months,
        datasets: [
            {
                label: 'Torneos creados',
                data: [],
                fill: false,
                borderColor: '#4F46E5',
                tension: 0.1
            },
        ]
    })

    useEffect(() => {
        if (value) {
            const tournamentsCreatedPeerMonth = new Int16Array(12)
            value.torneos.forEach((torneo) => {
                const createdAtFormatt = new Date(torneo.createdAt)
                const month = createdAtFormatt.getMonth()+1
                tournamentsCreatedPeerMonth[month] += 1
            })
            setData({
                ...data,
                datasets: [
                    {
                        ...data.datasets[0],
                        data: tournamentsCreatedPeerMonth,
                    }
                ]
            })
        }
    }, [loading])

    return (
        <div className='flex flex-col p-4 rounded-md shadow bg-white'>
            <h2 className='font-semibold text-xl text-slate-800'>Torneos Creados</h2>
            <LinesChart data={data} />
        </div>
    )
}

export default TournamentLines