import { useEffect, useState } from "react"
import Card from "../components/card/Card"
import useFetch from '@Modules/core/hooks/useFetch'
import { TORNEOS } from '@Modules/shared/config/web-services'
import { PARTIDOS } from '@Modules/shared/config/web-services'
import TournamentLines from "../components/tournament-lines-chart/TournamentLines"
import TournamentDoughnut from "../components/tournament-doughnut-chart/TournamentDoughnut"

const Statistics = () => {
    const torneosResonse = useFetch(TORNEOS)
    const partidosResponse = useFetch(PARTIDOS)
    const [torneos, setTorneos] = useState([])

    useEffect(() => {
        if (torneosResonse?.value?.torneos) {
            setTorneos(torneosResonse.value.torneos)
        }
    }, [torneosResonse.loading])

    return (
        <div className="m-2 flex flex-col gap-2">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
                <Card>
                    <Card.Icon>
                        <span className="material-symbols-outlined">
                            emoji_events
                        </span>
                    </Card.Icon>
                    <Card.Body>
                        <h3 className='text-xs font-semibold text-gray-500'>Torneos</h3>
                        <h3 className='text-xl font-semibold text-slate-800'>{torneos?.length}</h3>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Icon>
                        <span className="material-symbols-outlined">
                            group
                        </span>
                    </Card.Icon>
                    <Card.Body>
                        <h3 className='text-xs font-semibold text-gray-500'>Partidos</h3>
                        <h3 className='text-xl font-semibold text-slate-800'>{partidosResponse?.value?.partidos.length}</h3>
                    </Card.Body>
                </Card>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] gap-4'>
                <TournamentLines />
                <TournamentDoughnut />
            </div>
        </div>
    )
}

export default Statistics