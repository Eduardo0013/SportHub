const Table = ({ children, ...props }) => {
    return (
        <table className='bg-white rounded overflow-hidden table-auto text-center w-6/12' {...props}>
            { children }
        </table>
    )
}

const Head = ({ children, ...props }) => {
    return (
        <thead className="bg-white border-b" {...props}>
            {children}
        </thead>
    )
}
const Body = ({ children, ...props }) => {
    return (
        <tbody className='bg-white overflow-y-scroll max-h-full' {...props}>
            {children}
        </tbody>
    )
}

const Column = ({ children, ...props }) => {
    return (
        <th className='p-2' {...props}>
            {children}
        </th>
    )
}

const Row = ({ children, ...props}) => {
    return (
        <tr className='border-b' {...props}>
            {children}
        </tr>
    )
}

Table.Column = Column
Table.Row = Row
Table.Head = Head
Table.Body = Body

export default Table