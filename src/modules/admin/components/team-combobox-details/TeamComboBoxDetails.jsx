import { useState } from "react"
import ComboBox from '@Modules/core/components/form/ComboBox'

const TeamComboBoxDetails = ({ value = undefined,id = undefined}) => {
    const [teams, setTeams] = useState([
        { nombre: 'Barcelona Fc'},
        { nombre: 'RealMadrid' }
    ])

    return (
        <ComboBox value={value} id={id}>
            {teams.map(({ nombre }) => {
                return (
                    <ComboBox.Item>{nombre}</ComboBox.Item>
                )
            })}
        </ComboBox>
    )
}

export default TeamComboBoxDetails