import { useState } from "react"
import ComboBox from '@Modules/core/components/form/ComboBox'
import { v4 } from 'uuid'

const SportComboBoxDetails = () => {
    const [deportes, setDeportes] = useState([
        { nombre: 'Futbol' }
    ])

    return (
        <ComboBox>
            {deportes.map(({ nombre }) => {
                return (
                    <ComboBox.Item key={v4()}>
                        {nombre}
                    </ComboBox.Item>
                )
            })}
        </ComboBox>
    )
}

export default SportComboBoxDetails