import { forwardRef, useState } from "react"
import Select from 'react-select'
import useFetch from '@Modules/core/hooks/useFetch'
import { EQUIPOS } from '@Modules/shared/config/web-services'

const TeamComboBoxDetails = ({ref,...props}) => {
    const { loading, value, error} = useFetch(EQUIPOS)
    const [teams, setTeams] = useState([
        { label: 'Barcelona Fc'},
        { label: 'RealMadrid' }
    ])

    return forwardRef((props,ref) => (
        <Select options={teams} />

    ))
}

export default TeamComboBoxDetails