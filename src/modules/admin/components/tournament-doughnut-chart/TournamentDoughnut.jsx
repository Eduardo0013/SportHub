import Doughnut from '@Modules/core/components/doughnut-chart/DoughnutChart'

const TournamentDoughnut = () => {
    const data = {
        labels: ['Activos', 'Finalizados', 'Pendientes'],
        datasets: [
            {
                label: '# de torneos',
                data: [12, 19, 3],
                backgroundColor: [
                    '#F0FDF4',
                    '#EFF6FF',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    '#4ADE80',
                    '#60A5FA',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Torneos',
            },
        },
    }
    return (
        <div className='flex flex-col p-4 rounded-md shadow bg-white'>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default TournamentDoughnut