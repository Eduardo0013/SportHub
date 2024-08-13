import Card from "../components/card/Card"

const Statistics = () => {
    return (
        <div className="m-2 flex flex-col gap-2">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4">
                <Card>
                    <Card.Icon>
                        <span className="material-symbols-outlined">
                            emoji_events
                        </span>
                    </Card.Icon>
                    <Card.Body>
                        <h3 className='text-xs font-semibold text-gray-500'>Torneos Activos</h3>
                        <h3 className='text-xl font-semibold text-slate-800'>0</h3>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Icon>
                        <span className="material-symbols-outlined">
                            group
                        </span>
                    </Card.Icon>
                    <Card.Body>
                        <h3 className='text-xs font-semibold text-gray-500'>Partidos Activos</h3>
                        <h3 className='text-xl font-semibold text-slate-800'>0</h3>
                    </Card.Body>
                </Card>
            </div>
            <h4>Torneos</h4>
            <canvas id="dashboard" className="border rounded"></canvas>
        </div>
    )
}

export default Statistics