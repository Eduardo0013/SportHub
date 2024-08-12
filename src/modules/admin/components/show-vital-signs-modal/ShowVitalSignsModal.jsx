import stylesheet from './show-vital-signs-modal.module.css'

const ShowVitalSignsModal = () => {
    return (
        <div className={stylesheet.CreateVitalSignsModal}>
            <table className='bg-white rounded overflow-hidden table-auto text-center w-6/12'>
                <thead className='bg-white border-b'>
                    <tr>
                        <th className='p-2'>ID</th>
                        <th className='p-2'>ritmo cardiaco</th>
                        <th className='p-2'>estress</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-scroll'>
                    <tr className='border-b'>
                        <td className='p-2'>1</td>
                        <td className='p-2'>100</td>
                        <td className='p-2'>30</td>
                    </tr>
                    <tr className='border-b'>
                        <td className='p-2'>1</td>
                        <td className='p-2'>100</td>
                        <td className='p-2'>30</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowVitalSignsModal